import { Inter } from 'next/font/google'
import { SearchBar } from '@/components/SearchBar'
import { VolumeBooks, getbooks } from '@/services/GET/getbooks'
import { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'
import { BookItem } from '@/components/BookItem'
import { Header } from '@/components/Header'
import { BookSection } from '@/components/Booksection'
import { Footer } from '@/components/Footer'
import { useLaunchAdjustment } from '@/context/useSearchContext'
import { useDebouncedCallback } from 'use-debounce'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [dataVolumes, setDataVolumes] = useState<AxiosResponse<
    VolumeBooks,
    any
  > | null>(null)
  const [loading, setLoading] = useState(false)

  const { inputValue, setInputValue } = useLaunchAdjustment()

  const handleFetchData = async () => {
    setLoading(true)
    const result = await getbooks(inputValue)
    setDataVolumes(result)
    setLoading(false)
  }

  const debounced = useDebouncedCallback((value) => {
    setInputValue(value)
  }, 500)

  useEffect(() => {
    handleFetchData()
  }, [inputValue])

  return (
    <main
      className={`bg-[url('https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1496&q=80')] ${inter.className} flex flex-col min-h-screen`}
    >
      <Header />
      <section className="flex items-center justify-center sm:px-16 px-8 pb-20 flex-1">
        <article className="flex flex-col gap-8 items-center">
          <h1 className="font-medium sm:text-7xl text-4xl text-gray-600">
            Qual livro você está procurando?
          </h1>
          <p className="text-base text-gray-600 mb-4">
            Explore e encontre sua próxima leitura
          </p>
          <SearchBar
            onChange={(event) => debounced(event.target.value)}
            defaultValue={inputValue}
          />
        </article>
      </section>
      {inputValue && (
        <BookSection>
          {loading ? (
            <p className="m-auto text-slate-950">Carregando...</p>
          ) : (
            <>
              {dataVolumes?.data?.items &&
                dataVolumes?.data.items.map((book) => {
                  return <BookItem key={book.id} info={book} />
                })}
              {(!dataVolumes ||
                !dataVolumes?.data ||
                !dataVolumes?.data?.items ||
                dataVolumes?.data?.items?.length === 0) && (
                <p className="text-lg"> Desculpe.Resultado não encontrado.</p>
              )}
            </>
          )}
        </BookSection>
      )}
      <Footer />
    </main>
  )
}
