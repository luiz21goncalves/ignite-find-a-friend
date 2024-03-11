import { FastifyInstance } from 'fastify'

import { getCities } from './get-cities'
import { getStates } from './get-states'

export async function locationRoutes(app: FastifyInstance) {
  app.get('/v1/states', getStates)
  app.get('/v1/states/:acronym/cities', getCities)
}
