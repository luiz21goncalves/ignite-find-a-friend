import { Search } from 'lucide-react'
import Image from 'next/image'

import { getCities, getStates } from './actions'
import { SelectCity } from './select-city'
import { SelectState } from './select-state'

type HomePageProps = {
  searchParams: { uf?: string }
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const [states, cities] = await Promise.all([
    getStates(),
    getCities(searchParams.uf),
  ])

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
            <SelectState states={states} />
            <SelectCity cities={cities} />
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
