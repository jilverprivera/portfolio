import Link from 'next/link'
import { FrontMatter } from 'interfaces'

export const PostCard = ({
  slug,
  title,
  tags,
  description,
  readingTime
}: FrontMatter) => {
  return (
    <article className="w-full group border border-neutral-200 rounded-xl p-2">
      <Link href={`blog/${slug}`}>
        <a className="space-y-4">
          <div className="w-full overflow-hidden rounded-xl">
            <div className="w-full aspect-video bg-neutral-200  group-hover:scale-105 duration-200"></div>
          </div>

          <div className="w-full px-2 space-y-2">
            <div className="flex gap-x-1.5">
              {tags
                .sort((a, b) => a.localeCompare(b))
                .map((tag, i) => (
                  <span
                    key={i}
                    className="bg-neutral-100 p-1.5 rounded-xl text-xs text-neutral-600 group-hover:text-neutral-950 duration-200"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <h3 className="text-xl font-medium text-neutral-600 group-hover:text-neutral-950 duration-200">
              {title}
            </h3>
            <p className="text-base text-neutral-600 group-hover:text-neutral-950 group-hover:duration-200 leading-normal h-20">
              {description}
            </p>
            <p className="text-sm text-neutral-600 group-hover:text-neutral-950 duration-200">
              {readingTime?.text}
            </p>
          </div>
        </a>
      </Link>
    </article>
  )
}

// {
//   /* <Link >
//           <a className="hover:cursor-pointer">
//             <p className="flex items-center justify-start text-neutral-500 group-hover:text-red-500 duration-600">
//               <span className="mr-2">Read more</span>
//               <span className="mt-1">
//                 <BsArrowRight />
//               </span>
//             </p>
//           </a>
//         </Link> */

// }

