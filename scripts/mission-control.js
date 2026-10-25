#!/usr/bin/env node
/**
 * Legion Mission Control — a live local dashboard of your AI team.
 *
 *   node mission-control.js [--port 4777] [--no-open]
 *
 * Shows agents working right now, the activity feed, token cost per agent, the team
 * scoreboard (approvals vs corrections), lessons learned, memory and council verdicts.
 * Listens on 127.0.0.1 only. Zero dependencies, Node 18+.
 */
'use strict';
const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const mem = require('./memory.js');

const args = process.argv.slice(2);
const opt = (f, d) => { const i = args.indexOf(f); return i >= 0 && args[i + 1] ? args[i + 1] : d; };
const PORT = Number(opt('--port', process.env.LEGION_PORT || 4777));
const EVENTS = path.join(mem.LEGION_HOME, 'events.jsonl');
let VERSION = '';
try { VERSION = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8')).version; } catch { /* installed copy */ }

function councilReports(limit = 8) {
  const dir = path.join(mem.LEGION_HOME, 'council');
  let files = [];
  try { files = fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort().reverse().slice(0, limit); } catch { return []; }
  return files.map(f => {
    try {
      const d = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      return { file: f.replace(/\.json$/, '.md'), mode: d.mode, consensus: d.consensus || null, findings: (d.findings || []).length, reviewers: (d.reviews || d.results || []).map(r => r.key), at: f.slice(0, 19).replace(/T(\d\d)-(\d\d)-(\d\d)/, ' $1:$2:$3') };
    } catch { return null; }
  }).filter(Boolean);
}

function cost(d) {
  try {
    if (d.session && d.session.transcript && fs.existsSync(d.session.transcript)) return mem.claudeUsage(d.session.transcript);
  } catch { /* ignore */ }
  return null;
}

function state() {
  const d = mem.load();
  return {
    version: VERSION,
    home: mem.LEGION_HOME.replace(os.homedir(), '~'),
    rules: d.rules,
    lang: d.lang,
    scores: mem.teamRecord(d).all,
    lessons: mem.listLessons().map(l => ({ target: l.target, count: l.count, items: l.body.split('\n').filter(x => x.startsWith('- ')).map(x => x.slice(2)) })),
    pending: d.pendingLessons || [],
    usage: d.usage,
    council: councilReports(),
    cost: cost(d),
    events: mem.readEvents(400)
  };
}

const HTML = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Legion Mission Control</title>
<style>
:root{--bg:#0f0c26;--panel:#1a1640;--panel2:#221d52;--line:#2f2a66;--text:#eceaff;--muted:#a9a4d6;--accent:#ffb547;--blue:#8b9bff;--ok:#4ade80;--bad:#f87171;--warn:#fbbf24}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font:14px/1.45 Inter,Segoe UI,system-ui,sans-serif}
header{display:flex;align-items:center;gap:12px;padding:16px 20px;border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--bg);z-index:2}
header h1{font-size:18px;margin:0;font-weight:700}header .sub{color:var(--muted);font-size:12px;word-break:break-all}
.live{margin-left:auto;display:flex;align-items:center;gap:8px;color:var(--muted);font-size:12px}
.dot{width:9px;height:9px;border-radius:50%;background:var(--bad)}.dot.on{background:var(--ok);box-shadow:0 0 0 0 rgba(74,222,128,.6);animation:p 1.8s infinite}
@keyframes p{70%{box-shadow:0 0 0 8px rgba(74,222,128,0)}100%{box-shadow:0 0 0 0 rgba(74,222,128,0)}}
main{display:grid;gap:16px;padding:16px 20px;grid-template-columns:repeat(12,1fr)}
.card{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:14px 16px;min-width:0}
.card h2{font-size:13px;letter-spacing:.04em;text-transform:uppercase;color:var(--muted);margin:0 0 10px;font-weight:600}
.kpis{grid-column:span 12;display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.kpi .v{font-size:26px;font-weight:700}.kpi .l{color:var(--muted);font-size:12px}
.c6{grid-column:span 6}.c4{grid-column:span 4}.c8{grid-column:span 8}.c12{grid-column:span 12}
@media (max-width:900px){.c6,.c4,.c8{grid-column:span 12}.kpis{grid-template-columns:repeat(2,1fr)}}
.running{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px}
.chip{background:var(--panel2);border:1px solid var(--line);border-radius:999px;padding:4px 10px;font-size:12px;display:inline-flex;gap:6px;align-items:center}
.chip .spin{width:8px;height:8px;border-radius:50%;background:var(--accent);animation:p2 1s infinite alternate}@keyframes p2{to{opacity:.3}}
.feed{list-style:none;margin:0;padding:0;max-height:360px;overflow:auto}
.feed li{display:grid;grid-template-columns:64px 22px 1fr;gap:8px;padding:6px 0;border-bottom:1px solid var(--line);font-size:13px}
.feed time{color:var(--muted);font-variant-numeric:tabular-nums}
table{width:100%;border-collapse:collapse;font-size:13px}th,td{text-align:left;padding:6px 4px;border-bottom:1px solid var(--line)}th{color:var(--muted);font-weight:500}
.bar{height:8px;background:var(--panel2);border-radius:4px;overflow:hidden;min-width:60px}.bar i{display:block;height:100%;background:var(--blue)}
.bar.score i{background:var(--ok)}
.empty{color:var(--muted);font-style:italic}
.tag{font-size:11px;padding:1px 7px;border-radius:999px;border:1px solid var(--line);color:var(--muted)}
.ok{color:var(--ok)}.bad{color:var(--bad)}.warn{color:var(--warn)}
ul.plain{margin:0;padding-left:18px}ul.plain li{margin:3px 0}
footer{color:var(--muted);font-size:12px;padding:8px 20px 24px}
code{background:var(--panel2);padding:1px 6px;border-radius:6px}
</style></head><body>
<header>
<svg width="34" height="34" viewBox="0 0 100 100" aria-hidden="true"><rect width="100" height="100" rx="22" fill="#2b2370"/><g stroke="#8b9bff" stroke-width="2.4" opacity=".8"></g><circle cx="50" cy="50" r="11" fill="#ffb547"/><circle cx="50" cy="50" r="5" fill="#fff4d6"/><g fill="#8b9bff" id="ring"></g></svg>
<div><h1>Legion Mission Control</h1><div class="sub" id="sub">your AI team, live</div></div>
<div class="live"><span class="dot" id="dot"></span><span id="livetxt">connecting…</span></div>
</header>
<main>
<section class="kpis">
 <div class="card kpi"><div class="v" id="k-running">0</div><div class="l">agents working now</div></div>
 <div class="card kpi"><div class="v" id="k-runs">0</div><div class="l">agent runs (recent)</div></div>
 <div class="card kpi"><div class="v" id="k-approval">—</div><div class="l">approval rate (👍 / 👍+👎)</div></div>
 <div class="card kpi"><div class="v" id="k-tokens">—</div><div class="l">tokens this Claude Code session</div></div>
</section>
<section class="card c8"><h2>Live activity</h2><div class="running" id="running"></div><ul class="feed" id="feed"></ul></section>
<section class="card c4"><h2>Cost this session</h2><div id="cost"></div></section>
<section class="card c6"><h2>Team scoreboard</h2><div id="scores"></div></section>
<section class="card c6"><h2>Council verdicts</h2><div id="council"></div></section>
<section class="card c6"><h2>Lessons learned</h2><div id="lessons"></div></section>
<section class="card c6"><h2>What Legion knows about you</h2><div id="memory"></div></section>
</main>
<footer id="foot"></footer>
<script>
const $=id=>document.getElementById(id);
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmt=n=>n==null?'—':n>=1e6?(n/1e6).toFixed(2)+'M':n>=1e3?(n/1e3).toFixed(1)+'k':String(n);
const ICON={'agent-start':'▶️','agent-end':'✅','skill':'🧩','prompt':'💬','feedback':'⭐','lesson':'📘','council-start':'⚖️','council-end':'⚖️','session':'🟢','turn-end':'⏹️'};
(function ring(){const g=document.getElementById('ring');for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,x=50+30*Math.cos(a),y=50+30*Math.sin(a);g.insertAdjacentHTML('beforeend','<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="5"/>');}})();
let events=[], running=new Map(), S=null;
function describe(e){
  switch(e.type){
    case 'agent-start':return '<b>'+esc(e.agent||'agent')+'</b> started'+(e.task?' — '+esc(e.task):'')+' <span class="tag">'+esc(e.tool||'')+'</span>';
    case 'agent-end':return '<b>'+esc(e.agent||'agent')+'</b> finished'+(e.tokens?' · '+fmt(e.tokens)+' tokens':'')+(e.ms?' · '+Math.round(e.ms/1000)+'s':'')+(e.status&&e.status!=='completed'?' <span class="bad">'+esc(e.status)+'</span>':'');
    case 'skill':return 'used pack <b>'+esc(e.skill)+'</b>';
    case 'prompt':return '<span style="color:var(--muted)">you:</span> '+esc(e.text);
    case 'feedback':return (e.verdict==='up'?'<span class="ok">approved</span>':'<span class="bad">corrected</span>')+' work by '+esc((e.targets||[]).join(', '));
    case 'lesson':return 'lesson for <b>'+esc(e.target)+'</b>: '+esc(e.text);
    case 'council-start':return 'council asked '+esc((e.reviewers||[]).join(', '))+' to '+esc(e.mode);
    case 'council-end':return 'council verdict: <b>'+esc(e.consensus||'opinions')+'</b>'+(e.findings!=null?' · '+e.findings+' findings':'');
    case 'session':return 'session started in '+esc(e.tool);
    case 'turn-end':return '<span style="color:var(--muted)">turn finished</span>';
    default:return esc(e.type);
  }
}
function track(e){
  const key=e.id||e.agent;
  if(e.type==='agent-start')running.set(key,e);
  if(e.type==='agent-end'){ if(running.has(key))running.delete(key); else { for(const [k,v] of running) if(v.agent===e.agent){running.delete(k);break;} } }
  if(e.type==='turn-end'||e.type==='session'){ for(const [k,v] of running) if(Date.now()-Date.parse(v.ts)>30*60e3) running.delete(k); }
}
function renderFeed(){
  $('feed').innerHTML=events.slice(-120).reverse().map(e=>'<li><time>'+new Date(e.ts).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})+'</time><span>'+(ICON[e.type]||'•')+'</span><span>'+describe(e)+'</span></li>').join('')||'<li class="empty">No activity yet. Start Claude Code, Codex, Gemini CLI or Cursor and use Legion.</li>';
  const now=Date.now();
  $('running').innerHTML=[...running.values()].map(e=>'<span class="chip"><span class="spin"></span>'+esc(e.agent)+' · '+Math.max(0,Math.round((now-Date.parse(e.ts))/1000))+'s</span>').join('');
  $('k-running').textContent=running.size;
  $('k-runs').textContent=events.filter(e=>e.type==='agent-end').length;
}
function renderState(){
  if(!S)return;
  $('sub').textContent='v'+(S.version||'')+' · '+S.home;
  const sc=S.scores||[]; const up=sc.reduce((a,r)=>a+r.up,0), dn=sc.reduce((a,r)=>a+r.down,0);
  $('k-approval').textContent=up+dn?Math.round(up*100/(up+dn))+'%':'—';
  if(S.cost){const m=S.cost.main;const ag=Object.values(S.cost.agents||{}).reduce((a,x)=>a+x.tokens,0);$('k-tokens').textContent=fmt(m.input+m.cacheWrite+m.output+ag);
    const rows=[['main conversation',m.input+m.cacheWrite+m.output]].concat(Object.entries(S.cost.agents||{}).map(([k,v])=>[k,v.tokens])).sort((a,b)=>b[1]-a[1]);
    const max=Math.max(1,...rows.map(r=>r[1]));
    $('cost').innerHTML='<table>'+rows.map(r=>'<tr><td>'+esc(r[0])+'</td><td style="width:45%"><div class="bar"><i style="width:'+(r[1]*100/max).toFixed(1)+'%"></i></div></td><td>'+fmt(r[1])+'</td></tr>').join('')+'</table><p class="empty" style="margin:8px 0 0">+ '+fmt(m.cacheRead)+' tokens re-read from cache (cheap)</p>';
  } else $('cost').innerHTML='<p class="empty">Appears after your first Claude Code message with Legion installed. Codex: <code>memory.js report --codex</code>.</p>';
  $('scores').innerHTML=sc.length?'<table><tr><th>agent / pack</th><th>uses</th><th>👍</th><th>👎</th><th>reliability</th></tr>'+sc.slice(0,15).map(r=>{const n=r.up+r.down,p=n?r.up/n:null;return '<tr><td>'+esc(r.name)+'</td><td>'+r.uses+'</td><td>'+r.up+'</td><td>'+r.down+'</td><td>'+(p==null?'<span class="empty">no feedback</span>':'<div style="display:flex;gap:8px;align-items:center"><div class="bar score" style="flex:1"><i style="width:'+Math.max(3,p*100).toFixed(0)+'%;background:'+(p>=.75?'var(--ok)':p<.5?'var(--bad)':'var(--warn)')+'"></i></div><span>'+Math.round(p*100)+'%</span></div>')+'</td></tr>'}).join('')+'</table>':'<p class="empty">No feedback yet. Say “perfeito” or “não era isso” after Legion works and the scoreboard fills in.</p>';
  const C={approve:'<span class="ok">approve</span>',changes:'<span class="warn">changes</span>',reject:'<span class="bad">reject</span>'};
  $('council').innerHTML=(S.council||[]).length?'<table><tr><th>when</th><th>mode</th><th>reviewers</th><th>verdict</th><th>findings</th></tr>'+S.council.map(c=>'<tr><td>'+esc(c.at)+'</td><td>'+esc(c.mode)+'</td><td>'+esc(c.reviewers.join(', '))+'</td><td>'+(C[c.consensus]||'—')+'</td><td>'+c.findings+'</td></tr>').join('')+'</table>':'<p class="empty">No council runs yet. Try <code>node ~/.legion/bin/council.js review</code> in a project.</p>';
  const L=S.lessons||[];
  $('lessons').innerHTML=(L.length?L.map(l=>'<div style="margin-bottom:8px"><b>'+esc(l.target)+'</b> <span class="tag">'+l.count+'</span><ul class="plain">'+l.items.slice(-4).map(i=>'<li>'+esc(i).replace(/_\\((\\d{4}-\\d\\d-\\d\\d)\\)_/,'<span class="tag">$1</span>')+'</li>').join('')+'</ul></div>').join(''):'<p class="empty">No lessons yet — they are written when work needs rework.</p>')+((S.pending||[]).length?'<p class="warn">'+S.pending.length+' correction(s) waiting to become lessons.</p>':'');
  const R=S.rules||[];
  $('memory').innerHTML=R.length?'<ul class="plain">'+R.slice(0,20).map(r=>'<li>'+esc(r.text)+' <span class="tag">'+esc(r.category)+'</span></li>').join('')+'</ul>':'<p class="empty">Nothing yet. Say “a partir de agora…” or “always…” and Legion remembers.</p>';
  $('foot').innerHTML='Local only — data lives in <code>'+esc(S.home)+'</code>. Nothing is sent anywhere.';
}
async function refresh(){try{S=await (await fetch('/api/state')).json();events=S.events||[];running.clear();events.forEach(track);renderState();renderFeed();}catch(e){}}
function live(){
  const es=new EventSource('/api/events');
  es.onopen=()=>{$('dot').classList.add('on');$('livetxt').textContent='live';};
  es.onerror=()=>{$('dot').classList.remove('on');$('livetxt').textContent='reconnecting…';};
  es.onmessage=m=>{try{const e=JSON.parse(m.data);events.push(e);track(e);renderFeed();if(/feedback|lesson|council-end|agent-end|session/.test(e.type))refresh();}catch(_){}};
}
refresh().then(live);setInterval(renderFeed,1000);setInterval(refresh,15000);
</script></body></html>`;

function sendJSON(res, obj) { res.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }); res.end(JSON.stringify(obj)); }

const server = http.createServer((req, res) => {
  const host = String(req.headers.host || '').split(':')[0];
  if (!['127.0.0.1', 'localhost', '[::1]'].includes(host)) { res.writeHead(403); return res.end('forbidden'); } // DNS-rebinding guard
  const url = req.url.split('?')[0];
  if (url === '/') { res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); return res.end(HTML); }
  if (url === '/api/state') return sendJSON(res, state());
  if (url === '/api/events') {
    res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-store', connection: 'keep-alive' });
    res.write(': connected\n\n');
    let pos = 0; try { pos = fs.statSync(EVENTS).size; } catch { pos = 0; }
    let buf = '';
    const tick = () => {
      let size = 0; try { size = fs.statSync(EVENTS).size; } catch { return; }
      if (size < pos) pos = 0; // rotated
      if (size === pos) return;
      const fd = fs.openSync(EVENTS, 'r'); const chunk = Buffer.alloc(size - pos);
      fs.readSync(fd, chunk, 0, chunk.length, pos); fs.closeSync(fd); pos = size;
      buf += chunk.toString('utf8');
      const lines = buf.split('\n'); buf = lines.pop();
      for (const l of lines) if (l.trim()) res.write(`data: ${l}\n\n`);
    };
    const t = setInterval(tick, 800); const ka = setInterval(() => res.write(': ping\n\n'), 20000);
    req.on('close', () => { clearInterval(t); clearInterval(ka); });
    return;
  }
  res.writeHead(404); res.end('not found');
});

function openBrowser(url) {
  try {
    if (process.platform === 'win32') spawn('cmd', ['/c', 'start', '', url], { detached: true, stdio: 'ignore' }).unref();
    else spawn(process.platform === 'darwin' ? 'open' : 'xdg-open', [url], { detached: true, stdio: 'ignore' }).on('error', () => {}).unref();
  } catch { /* print URL only */ }
}

if (require.main === module) {
  server.on('error', e => {
    if (e.code === 'EADDRINUSE') { console.log(`Mission Control is already running: http://127.0.0.1:${PORT}`); if (!args.includes('--no-open')) openBrowser(`http://127.0.0.1:${PORT}`); }
    else console.error(e.message);
  });
  server.listen(PORT, '127.0.0.1', () => {
    const url = `http://127.0.0.1:${PORT}`;
    console.log(`⚔  Legion Mission Control → ${url}   (Ctrl+C to stop)`);
    if (!args.includes('--no-open')) openBrowser(url);
  });
}
module.exports = { server, state };
