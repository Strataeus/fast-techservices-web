#!/usr/bin/env bash
set -euo pipefail

# Run full local CI: install deps, lint, typecheck, build.

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Installing dependencies..."
npm ci --no-progress

echo "Running lint..."
npm run lint

echo "Running typecheck..."
npm run typecheck

echo "Running build..."
npm run build

echo "CI internal check completed."
