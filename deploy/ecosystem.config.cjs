module.exports = {
  apps: [
    {
      name: "whetstonez-backend",
      cwd: "./apps/backend",
      script: "node",
      args: "../../node_modules/@medusajs/cli/cli.js start",
      instances: 1,
      autorestart: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 9000,
      },
    },
    {
      name: "whetstonez-storefront",
      cwd: "./apps/storefront",
      script: "node",
      args: "../../node_modules/next/dist/bin/next start -p 8000",
      instances: 1,
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
}
