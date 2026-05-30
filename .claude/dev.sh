#!/bin/sh
# Wrapper so the preview launcher finds node@20 (not globally linked on this machine).
export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
cd "$(dirname "$0")/.." || exit 1
exec npm run dev
