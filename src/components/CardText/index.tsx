import { ReactNode } from 'react'

interface ICardext {
  children: ReactNode
}

export const CardText = ({ children }: ICardext) => {
  return (
    <div
      className={`rounded-3xl relative mt-2 ml-2 max-w-lg py-4 px-8 w-full h-500`}
    >
      <div className="h-max">{children}</div>
      <div className=" bg-slate-200 rounded-2xl border-2  shadow-xl py-4 px-8 max-w-lg w-full absolute bottom-2 right-2">
        {children}
      </div>
    </div>
  )
}
