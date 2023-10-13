interface props {
  setSearchedArticles: (arg: string) => void
}

export const PostSearch = ({ setSearchedArticles }: props) => {
  return (
    <div className="relative max-w-xl w-full my-8 group">
      <input
        type="text"
        onChange={(e) => {
          setSearchedArticles(e.target.value)
        }}
        placeholder="Search post by name..."
        className="relative w-full mx-auto px-4 py-2 outline-none bg-white rounded-md text-neutral-900 border border-neutral-600 group-hover:border-neutral-600 group-hover:placeholder:text-neutral-600 group-focus:border-neutral-600 group-focus:placeholder:text-neutral-600"
      />
      <svg
        className="absolute w-5 h-5 text-neutral-600 group-hover:text-neutral-600 group-focus:text-neutral-600 right-4 top-2/4 -translate-y-2/4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  )
}

