import { PrismaClient } from '@prisma/client'
import { config } from 'dotenv'
import { expand } from 'dotenv-expand'

expand(config({ path: ['.env.development'] }))

const prisma = new PrismaClient()
async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
