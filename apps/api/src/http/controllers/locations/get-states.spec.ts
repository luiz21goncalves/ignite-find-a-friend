import { StatusCodes } from 'http-status-codes'
import supertest from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { app } from '@/app'

describe('/v1/states', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get all cities by state id', async () => {
    const response = await supertest(app.server).get('/v1/states')

    expect(response.status).toBe(StatusCodes.OK)
    expect(response.body.states).toHaveLength(27)
    expect(response.body.states[0]).toStrictEqual({
      acronym: expect.any(String),
      id: expect.any(Number),
      name: expect.any(String),
    })
  })
})
