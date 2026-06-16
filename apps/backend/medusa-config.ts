import { loadEnv, defineConfig, Modules } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },
  modules: {
    [Modules.PAYMENT]: {
      resolve: "@medusajs/medusa/payment",
      options: {
        providers: [
          {
            resolve: "./src/modules/moyasar",
            id: "moyasar",
            options: {
              apiKey: process.env.MOYASAR_API_KEY,
              publishableKey: process.env.MOYASAR_PUBLISHABLE_KEY,
              webhookSecret: process.env.MOYASAR_WEBHOOK_SECRET,
            },
          },
        ],
      },
    },
  },
})
