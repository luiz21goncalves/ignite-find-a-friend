import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number(),
  POSTGRESQL_DATABASE: z.string(),
  POSTGRESQL_HOST: z.string(),
  POSTGRESQL_PASSWORD: z.string(),
  POSTGRESQL_PORT: z.coerce.number(),
  POSTGRESQL_USERNAME: z.string(),
})

const env = envSchema.safeParse(process.env)

if (env.success === false) {
  throw new Error(
    `Invalid environment variables. ${JSON.stringify(env.error.format())}`,
  )
}

export const ENV = env.data
