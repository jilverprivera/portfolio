import Link from 'next/link'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { IFrontMatter } from 'interfaces'

interface Props {
  next: IFrontMatter | undefined
  prev: IFrontMatter | undefined
  typePage: PAGE_TYPE
}
export enum PAGE_TYPE {
  POST = 'POST',
  PROJECT = 'PROJECT'
}

export const MDXNavigation = ({ next, prev, typePage }: Props) => {
  return (
    <div className="max-w-screen-xl xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-full mx-auto py-12 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xs:gap-12 sm:gap-12 md:gap-12 lg:gap-24 xl:gap-24">
      <div className="flex items-center justify-start">
        {prev != null && (
          <div className="flex items-center justify-center flex-col">
            <Link href={`/${typePage === PAGE_TYPE.POST ? 'blog' : 'portfolio'}/${prev.slug}`}>
              <a className="flex items-center justify-start text-zinc-900 hover:text-zinc-600 ">
                <span className="text-2xl mr-3">
                  <MdArrowBackIos />
                </span>
                <span className="text-lg leading-relaxed ">{prev.title}</span>
              </a>
            </Link>
          </div>
        )}
      </div>
      <div className="flex items-center justify-end">
        {next != null && (
          <div className="flex items-center justify-center flex-col">
            <Link href={`/${typePage === PAGE_TYPE.POST ? 'blog' : 'portfolio'}/${next.slug}`}>
              <a className="flex items-center justify-end text-zinc-900 hover:text-zinc-600 ">
                <span className="text-lg leading-relaxed">{next.title}</span>
                <span className="text-2xl ml-3">
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

