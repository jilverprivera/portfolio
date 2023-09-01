import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { formatDate } from 'utils'
import { IFrontMatter } from 'interfaces'

export const PostCard = ({ slug, title, tags, description, publishedAt, readingTime }: IFrontMatter) => {
  return (
    <div className="w-full py-12 border-t border-neutral-600 grid grid-cols-6 gap-24 group">
      <p className="font-normal uppercase text-xl text-neutral-800 group-hover:text-neutral-600 duration-600">
        {formatDate('en-US', new Date(publishedAt))}
      </p>
      <div className="col-span-4 w-full">
        <div className="flex gap-x-2 mb-2">
          {tags.map((tag, i) => (
            <span key={i} className="relative before:content-['#'] text-base text-neutral-800 group-hover:text-neutral-900 lowercase duration-600">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-5xl font-semibold text-neutral-900 group-hover:text-neutral-700 duration-600 mb-4">{title}</h3>
        <p className="text-xl text-neutral-800 group-hover:text-neutral-600 duration-600 leading-relaxed">{description}</p>
        <p className="text-neutral-800 group-hover:text-neutral-600 duration-600 my-2">{readingTime?.text}</p>
        <Link href={`blog/${slug}`}>
          <a className="hover:cursor-pointer">
            <p className="flex items-center justify-start text-neutral-500 group-hover:text-red-500 duration-600">
              <span className="mr-2">Read more</span>
              <span className="mt-1">
                <BsArrowRight />
              </span>
            </p>
          </a>
        </Link>
      </div>
    </div>
  )
}

