#!/usr/bin/env bash
# Run once on a fresh Ubuntu 22.04/24.04 VPS as a non-root user with sudo.
set -euo pipefail

echo "==> Installing system packages"
sudo apt update
sudo apt install -y curl git nginx certbot python3-certbot-nginx

echo "==> Installing Node.js 20"
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

echo "==> Installing Docker"
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker "$USER"

echo "==> Installing PM2"
sudo npm install -g pm2

APP_DIR="${APP_DIR:-/var/www/whetstonez}"

if [ ! -d "$APP_DIR/.git" ]; then
  echo "==> Cloning repository"
  git clone https://github.com/Hammax23/medusa-.git "$APP_DIR"
fi

cd "$APP_DIR"

echo "==> Create env files (edit these before first deploy!)"
cp -n deploy/.env.example deploy/.env 2>/dev/null || true
cp -n deploy/backend.env.example apps/backend/.env 2>/dev/null || true
cp -n deploy/storefront.env.example apps/storefront/.env.local 2>/dev/null || true

echo ""
echo "=========================================="
echo " VPS setup done. Next steps:"
echo "=========================================="
echo "1. Edit deploy/.env"
echo "2. Edit apps/backend/.env (secrets + domains)"
echo "3. Edit apps/storefront/.env.local (API key + domains)"
echo "4. Log out and back in (docker group)"
echo "5. Run: bash deploy/deploy.sh"
echo "6. Configure nginx: edit deploy/nginx.conf domains, then:"
echo "   sudo cp deploy/nginx.conf /etc/nginx/sites-available/whetstonez"
echo "   sudo ln -sf /etc/nginx/sites-available/whetstonez /etc/nginx/sites-enabled/"
echo "   sudo nginx -t && sudo systemctl reload nginx"
echo "7. SSL: sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com -d api.yourdomain.com"
echo "8. PM2 on boot: pm2 startup && pm2 save"
echo "=========================================="
