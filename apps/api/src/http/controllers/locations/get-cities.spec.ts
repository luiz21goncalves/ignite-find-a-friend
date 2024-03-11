import { StatusCodes } from 'http-status-codes'
import supertest from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { app } from '@/app'

describe('/v1/states/:acronym/cities', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get all cities by state id', async () => {
    const response = await supertest(app.server).get('/v1/states/DF/cities')

    expect(response.status).toBe(StatusCodes.OK)
    expect(response.body.cities).toHaveLength(1)
    expect(response.body).toStrictEqual({
      cities: [
        {
          id: '5300108',
          name: 'BRASILIA',
        },
      ],
    })
  })
})
