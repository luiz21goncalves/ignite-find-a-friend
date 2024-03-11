import cors from '@fastify/cors'
import fastify from 'fastify'

import { locationRoutes } from './http/controllers/locations/routes'

const app = fastify()

app.register(cors)

app.register(locationRoutes)

export { app }
