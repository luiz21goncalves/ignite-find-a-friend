import { FastifyReply, FastifyRequest } from 'fastify'
import { getReasonPhrase, StatusCodes } from 'http-status-codes'
import { z } from 'zod'

import { BRASIL_API_BASE_URL } from '@/constants'

type CityResponse = {
  nome: string
  codigo_ibge: string
}

export async function getCities(request: FastifyRequest, replay: FastifyReply) {
  const getCitiesParamsSchema = z.object({ acronym: z.string().length(2) })

  const { acronym } = getCitiesParamsSchema.parse(request.params)

  const response = await fetch(
    `${BRASIL_API_BASE_URL}/ibge/municipios/v1/${acronym}`,
  )

  if (response.status === StatusCodes.OK) {
    const data = (await response.json()) as CityResponse[]

    const cities = data.map((city) => {
      return { id: city.codigo_ibge, name: city.nome }
    })

    return replay.status(StatusCodes.OK).send({ cities })
  }

  return replay.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
    error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
  })
}
