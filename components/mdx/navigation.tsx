import Link from 'next/link'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { FrontMatter, PAGE_TYPE } from 'interfaces'

type props = {
  next: FrontMatter | undefined
  prev: FrontMatter | undefined
  typePage: PAGE_TYPE
}

export const Navigation = ({ next, prev, typePage }: props) => {
  return (
    <div className="max-w-screen-xl xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-full mx-auto py-12 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xs:gap-12 sm:gap-12 md:gap-12 lg:gap-24 xl:gap-24">
      <div className="flex items-center justify-end">
        {next != null && (
          <div className="flex items-center justify-center flex-col">
            <Link
              href={`/${typePage === PAGE_TYPE.POST ? 'blog' : 'work'}/${
                next.slug
              }`}
            >
              <a className="flex items-center justify-end text-neutral-400 hover:text-neutral-300 duration-200">
                <span className="text-2xl mr-2">
                  <MdArrowBackIos />
                </span>
                <span className="text-base">{next.title}</span>
              </a>
            </Link>
          </div>
        )}
      </div>

      <div className="flex items-center justify-start">
        {prev != null && (
          <div className="flex items-center justify-center flex-col">
            <Link
              href={`/${typePage === PAGE_TYPE.POST ? 'blog' : 'work'}/${
                prev.slug
              }`}
            >
              <a className="flex items-center justify-start text-neutral-400 hover:text-neutral-300 duration-200">
                <span className="text-base">{prev.title}</span>
                <span className="text-2xl ml-2">
                  <MdArrowForwardIos />
                </span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

