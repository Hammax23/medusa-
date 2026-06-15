const path = require("path")

const root = path.resolve(__dirname, "..")

module.exports = {
  apps: [
    {
      name: "whetstonez-backend",
      cwd: path.join(root, "apps/backend"),
      script: path.join(root, "node_modules/@medusajs/cli/cli.js"),
      args: "start",
      instances: 1,
      autorestart: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: "9100",
      },
    },
    {
      name: "whetstonez-storefront",
      cwd: path.join(root, "apps/storefront"),
      script: path.join(root, "node_modules/next/dist/bin/next"),
      args: "start -p 8100",
      instances: 1,
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
}
