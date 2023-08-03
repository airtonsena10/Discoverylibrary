import { ReactNode } from 'react'

interface ICardext {
  children: ReactNode
}

export const CardText = ({ children }: ICardext) => {
  return (
    <div
      className={` bg-slate-800 rounded-2xl shadow-xl relative  max-w-lg py-4 px-8 w-full h-500`}
    >
      <div className="h-max ">{children}</div>
    </div>
  )
}
