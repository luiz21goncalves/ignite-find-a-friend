import { Search } from 'lucide-react'
import Image from 'next/image'
import { Suspense } from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { SelectState } from './select-state'

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-between gap-32 bg-red-500 p-28 text-white">
      <div className="flex h-full w-[487px] flex-col items-start justify-between">
        <Image src="/logo.svg" alt="" width={215} height={56} />
        <h1 className="text-7xl font-extrabold leading-[90%] -tracking-wide">
          Leve a felicidade para o seu lar
        </h1>
        <p className="text-2xl font-semibold">
          Encontre o animal de estimação ideal para seu estilo de vida!
        </p>
      </div>
      <div className="flex h-full flex-col justify-between">
        <div />
        <Image
          src="/hero.svg"
          className="self-end"
          alt=""
          width={592}
          height={305}
        />
        <form className="flex items-center justify-between gap-8">
          <label className="inline-block text-base leading-8" htmlFor="state">
            Busque um amigo:
          </label>
          <div className="grid flex-shrink grid-cols-[80px_280px] gap-2">
            <Suspense
              fallback={
                <div className="h-20 w-20 rounded-2xl border-2 border-white bg-transparent" />
              }
            >
              <SelectState />
            </Suspense>
            <Select>
              <SelectTrigger className="bg-primary text-primary-foreground h-20 border-none text-2xl font-semibold">
                <SelectValue placeholder="Selecione a cidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>UF</SelectLabel>
                  <SelectItem value="MG">Cidade 1</SelectItem>
                  <SelectItem value="SP">Cidade 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <button
            className="flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-400 text-blue-950"
            type="submit"
          >
            <Search className="h-6 w-6" strokeWidth={3} />
          </button>
        </form>
      </div>
    </div>
  )
}
