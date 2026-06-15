#!/usr/bin/env bash
# Safe pre-flight check — run BEFORE deploy on a VPS with existing projects.
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/whetstonez}"
BACKEND_PORT=9100
STOREFRONT_PORT=8100
PG_PORT=5433
REDIS_PORT=6380

echo "=== Whetstonez pre-flight check ==="
echo "Install path: $APP_DIR"
echo ""

check_port() {
  local port=$1 label=$2
  if ss -tlnp 2>/dev/null | grep -q ":${port} " ; then
    # Allow if it's our own whetstonez process
    if ss -tlnp 2>/dev/null | grep ":${port} " | grep -qE "whetstonez|8100|9100|5433|6380"; then
      echo "  OK  port $port ($label) — whetstonez already using it"
    else
      echo "  WARN port $port ($label) is ALREADY IN USE by another app"
      echo "       Tell the developer — we may need different ports."
    fi
  else
    echo "  OK  port $port ($label) — free"
  fi
}

check_port $BACKEND_PORT "Medusa backend"
check_port $STOREFRONT_PORT "Storefront"
check_port $PG_PORT "Whetstonez Postgres"
check_port $REDIS_PORT "Whetstonez Redis"

echo ""
if [ -d "$APP_DIR" ]; then
  echo "  OK  $APP_DIR exists"
else
  echo "  INFO $APP_DIR does not exist yet — will be created on clone"
fi

echo ""
echo "Your other projects in /var/www/ are NOT touched by this deploy."
echo "Only these PM2 apps are managed: whetstonez-backend, whetstonez-storefront"
echo ""
pm2 list 2>/dev/null || echo "(PM2 not installed or no processes yet)"
