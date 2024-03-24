export type State = { acronym: string; id: number; name: string }

type GetStatesResponse = {
  states: State[]
}

export async function getStates() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/states`, {
    next: { revalidate: 60 * 60 * 24 }, // One day in seconds
  })

  const data = (await response.json()) as GetStatesResponse

  return data.states
}

export type City = { id: string; name: string }

type GetCitiesResponse = {
  cities: City[]
}

export async function getCities(uf?: string) {
  if (uf) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/states/${uf}/cities`,
      {
        next: { revalidate: 60 * 60 * 24 }, // One day in seconds
      },
    )

    const data = (await response.json()) as GetCitiesResponse

    return data.cities
  }

  return []
}
