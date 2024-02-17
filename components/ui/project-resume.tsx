import { useContext, useEffect } from 'react'
import Image from 'next/image'
import { AppContext } from 'context'
import { IFrontMatterV2 } from 'interfaces'

interface projectResumeProps {
  project: IFrontMatterV2
  children?: JSX.Element[]
}

export const ProjectResume = ({ project, children }: projectResumeProps) => {
  const { slug, coverImage, title, description, tags, technologies, category, collaborators, position } = project
  const { fullScreenFeature } = useContext(AppContext)

  const blockScrolling = (e: KeyboardEvent) => {
    const blockedKeys = ['ArrowUp', 'ArrowDown', ' ', 'PageUp', 'PageDown']
    if (blockedKeys.includes(e.key)) {
      e.preventDefault()
    }
  }
  useEffect(() => {
    if (fullScreenFeature) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', blockScrolling, false)
    } else {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', blockScrolling, false)
    }
    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', blockScrolling, false)
    }
  }, [fullScreenFeature])

  return (
    <div className={`pointer-events-none fixed inset-0 opacity-0 bg-white z-50 visual-${slug} overflow-scroll`}>
      <div className="h-[60vh] overflow-hidden">
        <Image src={coverImage ?? ''} alt={title} width={1920} height={1080} objectPosition={'center'} />
      </div>
      <div className=" w-full  py-16">
        <div className="max-w-screen-2xl w-11/12 mx-auto text-neutral-900 space-y-8">
          <div className="space-y-2">
            <span className="text-sm">{category}</span>
            <h1 className="text-5xl font-semibold">{title}</h1>
          </div>
          <p className="w-1/2 text-lg leading-snug ">{description}</p>
          <div className="grid grid-cols-4">
            {position && (
              <div>
                <h3 className="text-lg text-neutral-900">Position</h3>
                <ul>
                  {position?.map((role, i) => (
                    <li key={i}>{role}</li>
                  ))}
                </ul>
              </div>
            )}
            {collaborators && (
              <div className="space-y-4">
                <h3 className="text-lg text-neutral-900">Collaborators</h3>
                <ul className="space-y-2">
                  {collaborators
                    .sort((a, b) => a.localeCompare(b))
                    .map((collaborator, i) => (
                      <li key={i} className="list-disc list-inside">
                        {collaborator}
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {technologies && (
              <div className="space-y-4">
                <h3 className="text-lg text-neutral-900">Tech stack</h3>
                <ul className="space-y-2">
                  {technologies
                    .sort((a, b) => a.localeCompare(b))
                    .map((tech, i) => (
                      <li key={i} className="list-disc list-inside">
                        {tech}
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {tags && (
              <div className="space-y-4">
                <h3 className="text-lg text-neutral-900">Tags</h3>
                <ul className="space-y-2">
                  {tags
                    .sort((a, b) => a.localeCompare(b))
                    .map((tag, i) => (
                      <li key={i} className="list-disc list-inside">
                        {tag}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {children}
    </div>
  )
}

