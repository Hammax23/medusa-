#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-$HOME/medusa-}"
BRANCH="${BRANCH:-main}"

echo "==> Deploying Whetstonez Ecommerce from $APP_DIR"

cd "$APP_DIR"

echo "==> Pull latest code"
git fetch origin
git checkout "$BRANCH"
git pull origin "$BRANCH"

echo "==> Start database services"
docker compose -f deploy/docker-compose.yml --env-file deploy/.env up -d

echo "==> Install dependencies"
npm ci

echo "==> Run migrations"
cd apps/backend
node ../../node_modules/@medusajs/cli/cli.js db:migrate
cd ../..

echo "==> Build applications"
npm run build

echo "==> Restart PM2 processes"
pm2 reload deploy/ecosystem.config.cjs --update-env || pm2 start deploy/ecosystem.config.cjs
pm2 save

echo "==> Deploy complete"
pm2 status
