import { CardText } from '@/components/CardText'

import { Header } from '@/components/Header'
import { Book, getbooksById } from '@/services/GET/getbooksById'
import { AxiosResponse } from 'axios'

import { Inter } from 'next/font/google'
import Image from 'next/image'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function BookDetails() {
  const [dataBook, setDataBook] = useState<AxiosResponse<Book, any> | null>(
    null,
  )
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const { id } = router.query

  const handleFetchData = async () => {
    if (id) {
      setLoading(true)
      const result = await getbooksById(id as string)
      setDataBook(result)
      setLoading(false)
    }
  }

  useEffect(() => {
    handleFetchData()
  }, [id])

  return (
    <main
      className={` bg-slate-900 ${inter.className} flex flex-col min-h-screen`}
    >
      <Header />
      {loading ? (
        <p className="px-16 text-center flex-1">Carregando...</p>
      ) : (
        <>
          {dataBook && (
            <>
              <section className="max-w-5xl m-auto gap-5 flex sm:px-16 md:flex-row pb-20 px-8">
                <article className="m-auto">
                  {dataBook?.data?.volumeInfo?.imageLinks ? (
                    <Image
                      className=""
                      width={200}
                      height={350}
                      alt={`Book ${dataBook?.data?.volumeInfo?.title}`}
                      src={
                        dataBook?.data?.volumeInfo?.imageLinks?.medium
                          ? dataBook?.data?.volumeInfo?.imageLinks?.medium
                          : dataBook?.data?.volumeInfo?.imageLinks?.thumbnail
                      }
                    />
                  ) : (
                    <p className="w-11/12 text-center text-sm text-gray-600">
                      Não há imagem disponível
                    </p>
                  )}
                </article>
                <article className="rounded-3xl bg-slate-600 border-2 border-gray-800 border-solid py-9 px-6  flex flex-col gap-8">
                  <h1 className={`${inter.className} text-3xl text-gray-100`}>
                    {dataBook?.data?.volumeInfo?.title}
                  </h1>
                  <CardText>
                    <p className="text-base">
                      Author (a):{' '}
                      {dataBook?.data?.volumeInfo?.authors?.map(
                        (author, index) =>
                          index ===
                          dataBook?.data?.volumeInfo?.authors.length - 1
                            ? author
                            : author + ', ',
                      ) || 'Não consta'}
                    </p>
                  </CardText>

                  <section className="max-w-5xl m-auto flex sm:px-4 pb-12 px-8 flex-wrap lg:flex-nowrap justify-center">
                    <CardText>
                      <div className="flex flex-col">
                        <h3 className="text-xl font-bold">Descrição</h3>
                        <div
                          className="text-gray-600 text-base  text-ellipsis overflow-ellipsis overflow-hidden h-20"
                          dangerouslySetInnerHTML={{
                            __html:
                              dataBook?.data?.volumeInfo?.description ||
                              '<p>Não consta</p>',
                          }}
                        ></div>
                      </div>
                    </CardText>
                  </section>
                </article>
              </section>
            </>
          )}
        </>
      )}
    </main>
  )
}
