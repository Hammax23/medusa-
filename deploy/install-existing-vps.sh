#!/usr/bin/env bash
# Safe install for VPS that ALREADY has projects in /var/www/
# Does NOT reinstall nginx, node, or touch other sites.
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/whetstonez}"

echo "=== Whetstonez install (existing VPS — safe mode) ==="
echo "Install path: $APP_DIR"
echo "Your other /var/www/* projects will NOT be modified."
echo ""

if [ ! -d "$APP_DIR/.git" ]; then
  echo "==> Cloning into $APP_DIR (new folder, separate from your other projects)"
  sudo mkdir -p /var/www
  sudo git clone https://github.com/Hammax23/medusa-.git "$APP_DIR"
  sudo chown -R "$USER:$USER" "$APP_DIR"
else
  echo "==> Repo already exists at $APP_DIR"
fi

cd "$APP_DIR"

echo "==> Create env files if missing (won't overwrite existing)"
cp -n deploy/.env.example deploy/.env 2>/dev/null || true
cp -n deploy/backend.env.example apps/backend/.env 2>/dev/null || true
cp -n deploy/storefront.env.example apps/storefront/.env.local 2>/dev/null || true

bash deploy/preflight.sh

echo ""
echo "=========================================="
echo " Next steps (safe for existing VPS):"
echo "=========================================="
echo "1. Edit: nano $APP_DIR/deploy/.env"
echo "2. Edit: nano $APP_DIR/apps/backend/.env"
echo "3. Edit: nano $APP_DIR/apps/storefront/.env.local"
echo "4. Deploy:  cd $APP_DIR && bash deploy/deploy.sh"
echo "5. Nginx — ADD only (don't delete other sites):"
echo "   sudo cp deploy/nginx.conf /etc/nginx/sites-available/whetstonez"
echo "   sudo ln -sf /etc/nginx/sites-available/whetstonez /etc/nginx/sites-enabled/whetstonez"
echo "   sudo nginx -t && sudo systemctl reload nginx"
echo "6. SSL: sudo certbot --nginx -d vyntechsolutions.ca -d www.vyntechsolutions.ca -d api.vyntechsolutions.ca"
echo "=========================================="
