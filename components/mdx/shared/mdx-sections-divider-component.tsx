type props = {
  number: string
  sectionTitle: string
}

export const MDXSectionsDividerComponent = ({ number, sectionTitle }: props) => {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto flex items-center justify-between pb-4 border-b border-neutral-400 text-xl uppercase text-neutral-200">
      <span>{number}</span>
      <h2>{sectionTitle}</h2>
    </div>
  )
}

