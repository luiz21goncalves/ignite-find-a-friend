import fs from 'node:fs/promises'
import path from 'node:path'

import { PrismaClient } from '@prisma/client'
import { config } from 'dotenv'
import { expand } from 'dotenv-expand'

expand(config({ path: ['.env.development'] }))

const prisma = new PrismaClient()

const LOCATIONS_PATH = path.resolve(__dirname, 'data', 'locations')
const CITIES_PATH = path.resolve(LOCATIONS_PATH, 'cities')

type State = {
  id: number
  sigla: string
  nome: string
}

type City = {
  nome: string
  codigo_ibge: string
}

async function main() {
  const statesAmount = await prisma.state.count()
  const citiesAmount = await prisma.city.count()
  console.log({ city: citiesAmount, state: statesAmount })

  const statesContent = await fs.readFile(
    path.resolve(LOCATIONS_PATH, 'brazil.json'),
    { encoding: 'utf8' },
  )

  const statesJson = JSON.parse(statesContent) as State[]

  const createStatesPromises = statesJson.map((state) => {
    return prisma.state.upsert({
      create: {
        acronym: state.sigla,
        external_id: String(state.id),
        name: state.nome,
      },
      update: {
        acronym: state.sigla,
        name: state.nome,
      },
      where: { external_id: String(state.id) },
    })
  })

  const createdStates = await Promise.all(createStatesPromises)

  const citiesContent = await Promise.all(
    createdStates.map(async (state) => {
      const file = `${state.acronym}.json`

      const content = await fs.readFile(path.resolve(CITIES_PATH, file), {
        encoding: 'utf8',
      })

      const json = JSON.parse(content) as City[]

      return {
        cities: json,
        state,
      }
    }),
  )

  const createCitiesPromises = citiesContent.reduce(
    (array, { cities, state }) => {
      cities.forEach((city) => {
        array.push(
          prisma.city.upsert({
            create: {
              external_id: city.codigo_ibge,
              name: city.nome,
              state_id: state.id,
            },
            update: { name: city.nome, state_id: state.id },
            where: { external_id: city.codigo_ibge },
          }),
        )
      })

      return array
    },
    [] as Promise<unknown>[],
  )

  await Promise.all(createCitiesPromises)

  const statesAmount1 = await prisma.state.count()
  const citiesAmount1 = await prisma.city.count()
  console.log({ city: citiesAmount1, state: statesAmount1 })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
