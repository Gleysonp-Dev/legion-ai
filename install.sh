#!/usr/bin/env sh
# Legion one-line installer for macOS and Linux:
#   curl -fsSL https://raw.githubusercontent.com/Gleysonp-Dev/legion-ai/main/install.sh | sh
set -e
REPO_URL="${LEGION_REPO:-https://github.com/Gleysonp-Dev/legion-ai.git}"
DEST="${LEGION_DIR:-$HOME/.legion/repo}"

command -v git  >/dev/null 2>&1 || { echo "Legion needs git: https://git-scm.com/downloads"; exit 1; }
command -v node >/dev/null 2>&1 || { echo "Legion needs Node.js 18+: https://nodejs.org"; exit 1; }

if [ -d "$DEST/.git" ]; then
  echo "Updating Legion in $DEST"
  git -C "$DEST" pull --ff-only --quiet
else
  echo "Downloading Legion to $DEST"
  mkdir -p "$(dirname "$DEST")"
  git clone --depth 1 --quiet "$REPO_URL" "$DEST"
fi
node "$DEST/install.js" "$@"
