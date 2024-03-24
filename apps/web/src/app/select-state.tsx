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

import { State } from './actions'

type SelectStateProps = {
  states: State[]
}

export function SelectState({ states }: SelectStateProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const uf = searchParams.get('uf') || undefined

  return (
    <Select
      defaultValue={uf}
      onValueChange={(uf) => {
        const params = new URLSearchParams({ uf })

        console.log({ params: params.toString() })

        return router.push(`/?${params.toString()}`)
      }}
    >
      <SelectTrigger className="h-20 w-fit min-w-20 flex-shrink-0 border-2 bg-transparent text-2xl font-semibold text-primary-foreground">
        <SelectValue placeholder="UF" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {states?.map((state) => {
            return (
              <SelectItem key={state.id} value={state.acronym}>
                {state.acronym}
              </SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
