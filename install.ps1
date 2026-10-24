# Legion one-line installer for Windows (PowerShell):
#   irm https://raw.githubusercontent.com/Gleysonp-Dev/legion-ai/main/install.ps1 | iex
$ErrorActionPreference = 'Stop'
$RepoUrl = if ($env:LEGION_REPO) { $env:LEGION_REPO } else { 'https://github.com/Gleysonp-Dev/legion-ai.git' }
$Dest    = if ($env:LEGION_DIR)  { $env:LEGION_DIR }  else { Join-Path $HOME '.legion\repo' }

if (-not (Get-Command git  -ErrorAction SilentlyContinue)) { Write-Host 'Legion needs git: https://git-scm.com/download/win'; exit 1 }
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { Write-Host 'Legion needs Node.js 18+: https://nodejs.org'; exit 1 }

if (Test-Path (Join-Path $Dest '.git')) {
  Write-Host "Updating Legion in $Dest"
  git -C $Dest pull --ff-only --quiet
} else {
  Write-Host "Downloading Legion to $Dest"
  New-Item -ItemType Directory -Force -Path (Split-Path $Dest) | Out-Null
  git clone --depth 1 --quiet $RepoUrl $Dest
}
node (Join-Path $Dest 'install.js') @args
