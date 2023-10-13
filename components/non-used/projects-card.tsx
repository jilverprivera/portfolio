import Image from 'next/image'
import { IFrontMatter } from 'interfaces'
import Link from 'next/link'

export const ProjectsCard = ({ slug, coverImage, title, publishedAt, technologies, tags }: IFrontMatter) => {
  return (
    <Link href={`/works/${slug}`}>
      <a className="group">
        <picture className="aspect-video rounded-md group-hover:rounded-2xl duration-150 overflow-hidden flex items-center justify-center">
          <Image src={coverImage ?? ''} alt={slug} width={1536} height={864} className="group-hover:scale-105 duration-300" />
        </picture>
        <div className="mt-4">
          <div className="flex items-center justify-start space-x-4 text-base mb-4">
            <p className="text-neutral-300 border p-2 rounded-full">{publishedAt}</p>
            <div className="flex items-start justify-center space-x-4 border p-2 rounded-full">
              {technologies
                ?.sort((a, b) => a.localeCompare(b))
                .map((technology, index) => (
                  <p key={index} className="text-neutral-300 ">
                    {technology}
                  </p>
                ))}
            </div>
          </div>

          <h3 className="text-4xl uppercase font-bold text-neutral-100 mb-4">{title}</h3>
          <div className="flex items-center justify-start space-x-4">
            <div className="flex items-center justify-start space-x-2">
              {tags
                ?.sort((a, b) => a.localeCompare(b))
                .map((tag, index) => (
                  <p
                    key={index}
                    className="relative after:content-['•'] after:last:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 pr-4 text-lg text-neutral-300"
                  >
                    {tag}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

