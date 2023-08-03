import { Search } from 'lucide-react'
import { ChangeEvent } from 'react'

interface ISearchBar {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  defaultValue?: string
}

export const SearchBar = ({ onChange, defaultValue }: ISearchBar) => {
  return (
    <div className="relative sm:w-96 w-11/12 rounded-3xl h-10 ml-5">
      <Search className="absolute h-5 z-10 " />
      <input
        type="text"
        className="bg-white sm:w-96 w-full px-4 outline-none rounded-3xl absolute bottom-2 h-10 border-solid border-2 right-15"
        placeholder="     Digite o nome do livro..."
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  )
}
