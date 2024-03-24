'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { City } from './actions'

type SelectCityProps = {
  cities: City[]
}

export function SelectCity({ cities }: SelectCityProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const cityId = searchParams.get('city') || undefined

  return (
    <Select
      defaultValue={cityId}
      onValueChange={(cityId) => {
        const uf = searchParams.get('uf') as string
        const params = new URLSearchParams({ city: cityId, uf })

        return router.push(`/?${params.toString()}`)
      }}
    >
      <SelectTrigger className="h-20 border-none bg-primary text-2xl font-semibold text-primary-foreground">
        <SelectValue placeholder="Selecione a cidade" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {cities.map((city) => {
            return <SelectItem value={city.id}>{city.name}</SelectItem>
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
