#!/bin/bash
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR" || exit 1

echo "================================"
echo "  Accounts Spec Demo — starting"
echo "================================"

if [ ! -f "$DIR/public/index.html" ]; then
  echo "  ERROR: public/index.html not found."
  echo "  Run this script from: $DIR"
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "  Installing dependencies..."
  npm install
fi

# Stop any old server on port 3000 (wrong demo often causes 'Cannot GET /')
if lsof -ti :3000 >/dev/null 2>&1; then
  echo "  Stopping existing process on port 3000..."
  lsof -ti :3000 | xargs kill -9 2>/dev/null
  sleep 1
fi

echo "  Starting from: $DIR"
echo "  Open: http://localhost:3000"
echo "================================"

node server.js
