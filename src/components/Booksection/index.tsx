import { ReactNode } from 'react'

interface IBookSection {
  children: ReactNode
}

export const BookSection = ({ children }: IBookSection) => {
  return (
    <section className="m-auto w-11/12 flex flex-col items-center gap-8">
      <h2 className={`text-center text-4xl text-gray-950`}></h2>
      <div className=" rounded-3xl pb-20 sm:px-20 px-8 flex flex-wrap gap-3">
        {children}
      </div>
    </section>
  )
}
