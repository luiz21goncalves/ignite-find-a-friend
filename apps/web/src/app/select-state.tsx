'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type State = { acronym: string; id: number; name: string }

type Response = {
  states: State[]
}

export async function SelectState() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/states`, {
    next: { revalidate: 60 * 60 * 24 }, // One day in seconds
  })
  const data = (await response.json()) as Response

  return (
    <Select>
      <SelectTrigger className="text-primary-foreground h-20 w-fit min-w-20 flex-shrink-0 border-2 bg-transparent text-2xl font-semibold">
        <SelectValue placeholder="UF" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>UF</SelectLabel>
          {data?.states?.map((state) => {
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
