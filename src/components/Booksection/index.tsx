import { ReactNode } from 'react'

interface IBookSection {
  children: ReactNode
}

export const BookSection = ({ children }: IBookSection) => {
  return (
    <section className="m-auto w-11/12 flex flex-col items-center gap-8">
      <h2 className={`text-center text-4xl py-12 text-gray-950`}></h2>
      <div className=" w-full rounded-3xl py-14 sm:px-20 px-8 flex flex-wrap gap-4">
        {children}
      </div>
    </section>
  )
}
