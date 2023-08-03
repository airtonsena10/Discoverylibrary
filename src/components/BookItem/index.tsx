import { Item } from '@/services/GET/getbooks'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })
interface IBookItem {
  info: Item
}

export const BookItem = ({ info }: IBookItem) => {
  const router = useRouter()

  return (
    <article
      className={`${inter.className} relative flex-1 min-w-20rem h-17.5rem mt-4 ml-4`}
    >
      <div
        className="rounded-2xl bg-slate-100 shadow-sm py-9 px-6 flex items-start gap-4 w-full max-w-full cursor-pointer absolute flex-1 min-w-20rem bottom-4 right-4"
        onClick={() => router.push(`/${info.id}`)}
      >
        <div className="w-120 h-200 min-w-120 shadow-md flex items-center justify-center">
          {info.volumeInfo.imageLinks ? (
            <Image
              width={120}
              height={300}
              alt={`Book cover of ${info.volumeInfo.title}`}
              src={info.volumeInfo.imageLinks.smallThumbnail}
              className="h-full"
            />
          ) : (
            <p className="w-11/12 text-center text-sm text-gray-600">
              Não há imagem disponível
            </p>
          )}
        </div>
        <div>
          <h3
            className={`${inter.className} text-xl mb-4 text-ellipsis overflow-hidden h-14`}
          >
            {info.volumeInfo.title}
          </h3>
          <p className="h-28  text-ellipsis overflow-hidden text-xs text-gray-600">
            {info?.volumeInfo?.authors?.map((author, index) =>
              index === info?.volumeInfo?.authors.length - 1
                ? author
                : author + ', ',
            )}
          </p>
        </div>
      </div>
    </article>
  )
}
