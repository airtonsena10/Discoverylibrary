import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()

  return (
    <header className={`m-auto p-16 flex items-center gap-4`}>
      <div className="cursor-pointer" onClick={() => router.push('/')} />
      <p className=" text-slate-900 text-3xl font-bold">Discovery library</p>
    </header>
  )
}
