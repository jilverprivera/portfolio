import networks from 'utils/json/networks.json'
import { useState } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

export const Footer = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  return (
    <footer className="w-full pt-32 pb-12 bg-neutral-950">
      <div className="max-w-screen-3xl w-11/12 mx-auto grid grid-cols-2 gap-24">
        <p className="text-7xl text-neutral-300">Find me on</p>
        <div className="grid">
          {networks.map((network, i) => (
            <a
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              key={i}
              href={network.url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-3xl text-neutral-400 hover:text-neutral-200 duration-200 relative py-12 border-t first:border-t-0 border-neutral-600"
            >
              {network.name}

              {activeIndex === i && (
                <div className="absolute top-2/4 -translate-y-2/4 right-8 text-5xl">
                  <BsArrowUpRight />
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

