import React from 'react'
import Image from 'next/image'
import { IFrontMatter } from 'interfaces'
import Link from 'next/link'

export const NewestProjectCard = ({ coverImage, slug, title, technologies, publishedAt, tags, current }: IFrontMatter) => {
  return (
    <div className="w-full">
      <Link href={`/works/${slug}`}>
        <a>
          <picture className="aspect-video rounded-2xl overflow-hidden flex items-center justify-center group">
            <Image src={coverImage ?? ''} alt={slug} width={1920} height={1080} className="group-hover:scale-105 duration-300" />
          </picture>
        </a>
      </Link>
      <div className="mt-4">
        <div className="flex items-center justify-start space-x-4 text-lg mb-4">
          <p className="text-neutral-300 border p-4 rounded-full">
            {publishedAt} - {current && 'Present'}
          </p>
          <div className="flex items-start justify-center space-x-4 border p-4 rounded-full">
            {technologies
              ?.sort((a, b) => a.localeCompare(b))
              .map((technology, index) => (
                <p key={index} className="text-neutral-300 ">
                  {technology}
                </p>
              ))}
          </div>
        </div>
        <h3 className="text-5xl uppercase font-bold text-neutral-100 mb-4">{title}</h3>
        <div className="flex items-center justify-start space-x-2">
          {tags
            ?.sort((a, b) => a.localeCompare(b))
            .map((tag, index) => (
              <p
                key={index}
                className="relative after:content-['•'] after:last:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 pr-4 text-xl text-neutral-300"
              >
                {tag}
              </p>
            ))}
        </div>
      </div>
    </div>
  )
}

