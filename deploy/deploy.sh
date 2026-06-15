#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/whetstonez}"
BRANCH="${BRANCH:-main}"

echo "==> Deploying Whetstonez from $APP_DIR"
echo "==> Other /var/www projects are NOT touched."

cd "$APP_DIR"

echo "==> Pull latest code"
git fetch origin
git checkout "$BRANCH"
git pull origin "$BRANCH"

echo "==> Start Whetstonez database only (isolated Docker project)"
docker compose -p whetstonez -f deploy/docker-compose.yml --env-file deploy/.env up -d

echo "==> Install dependencies"
npm ci

echo "==> Run migrations"
cd apps/backend
node ../../node_modules/@medusajs/cli/cli.js db:migrate
cd ../..

echo "==> Build applications"
npm run build

echo "==> Restart ONLY whetstonez PM2 apps (other PM2 apps stay running)"
if pm2 describe whetstonez-backend > /dev/null 2>&1; then
  pm2 reload whetstonez-backend whetstonez-storefront --update-env
else
  pm2 start deploy/ecosystem.config.cjs
fi
pm2 save

echo "==> Deploy complete"
pm2 list | grep -E "whetstonez|App name" || pm2 status
