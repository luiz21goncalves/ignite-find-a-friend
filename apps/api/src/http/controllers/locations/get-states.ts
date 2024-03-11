import { FastifyReply, FastifyRequest } from 'fastify'
import { getReasonPhrase, StatusCodes } from 'http-status-codes'

import { BRASIL_API_BASE_URL } from '@/constants'

type StateResponde = {
  id: number
  sigla: string
  nome: string
}

export async function getStates(
  _request: FastifyRequest,
  replay: FastifyReply,
) {
  const response = await fetch(`${BRASIL_API_BASE_URL}/ibge/uf/v1`)

  if (response.status === StatusCodes.OK) {
    const data = (await response.json()) as StateResponde[]

    const states = data.map((state) => {
      return {
        acronym: state.sigla,
        id: state.id,
        name: state.nome,
      }
    })

    return replay.status(StatusCodes.OK).send({ states })
  }

  return replay.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
    error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
  })
}
