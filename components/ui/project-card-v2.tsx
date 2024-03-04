import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FrontMatter } from 'interfaces'

type props = {
  projects: FrontMatter[]
  reversed?: boolean
  start: number
  finish?: number
}

export const ProjectCardV2 = ({ projects, reversed, start, finish }: props) => {
  const firstImage = useRef<any>(null)
  const secondImage = useRef<any>(null)
  let requestAnimationFrameId: number | null = null
  let xPercent = reversed ? 100 : 0
  let currentXPercent = reversed ? 100 : 0
  const speed = 0.05

  const manageMouseMove = ({ clientX }: MouseEvent) => {
    xPercent = (clientX / window.innerWidth) * 100
    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate)
    }
  }

  const animate = () => {
    const xPercentDelta = xPercent - currentXPercent
    currentXPercent = currentXPercent + xPercentDelta * speed
    const firstImagePercent = 66.66 - currentXPercent * 0.33
    const secondImagePercent = 33.33 + currentXPercent * 0.33

    if (finish) {
      firstImage.current.style.width = `${firstImagePercent}%`
    }
    if (finish) {
      secondImage.current.style.width = `${secondImagePercent}%`
    }

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId ?? 0)
      requestAnimationFrameId = null
    } else {
      window.requestAnimationFrame(animate)
    }
  }

  return (
    <div
      onMouseMove={(e: any) => {
        manageMouseMove(e)
      }}
      className="flex gap-8 py-4"
    >
      <div
        ref={firstImage}
        className="imageContainer border h-full rounded-md flex flex-col overflow-hidden"
      >
        <Link
          href={`/work/${projects[start].slug}`}
          className="relative flex items-center justify-center"
        >
          <a>
            <Image
              src={`${projects[start].coverImage}`}
              width={1920}
              height={1080}
              quality={100}
              alt={projects[start].slug}
              className="overflow-hidden"
            />
          </a>
        </Link>
        <div className=" p-2">
          <span className="text-xs">
            {projects[start].category}
            {projects[start].company && ` at ${projects[start].company}`}
          </span>
          <h3 className="text-xl font-medium text-neutral-950">
            {projects[start].title}
          </h3>
          <ul className="flex flex-wrap gap-2 text-xs text-neutral-950">
            {projects[start].tags
              ?.sort((a, b) => a.localeCompare(b))
              .map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
          </ul>
        </div>
      </div>

      {finish && (
        <div
          ref={secondImage}
          className="imageContainer border h-full rounded-md flex flex-col overflow-hidden"
        >
          <Link href={`/work/${projects[finish].slug}`} className="relative ">
            <a>
              <Image
                src={`${projects[finish].coverImage}`}
                width={1920}
                height={1080}
                alt={projects[finish].slug}
                className="overflow-hidden"
              />
            </a>
          </Link>
          <div className="p-2">
            <span className="text-xs">
              {projects[finish].category}
              {projects[finish].company && ` at ${projects[finish].company}`}
            </span>
            <h3 className="text-xl font-medium text-neutral-950">
              {projects[finish].title}
            </h3>
            <ul className="flex flex-wrap gap-2 text-xs text-neutral-950">
              {projects[finish].tags
                ?.sort((a, b) => a.localeCompare(b))
                .map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

