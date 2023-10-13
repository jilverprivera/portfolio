import { IFrontMatter } from 'interfaces'
import Image from 'next/image'

export const MdxHeroComponent = ({ category, description, title, collaborators, roles, coverImage, technologies, tags }: IFrontMatter) => {
  return (
    <section className="mb-16">
      <div className="h-[60vh] overflow-hidden">
        <picture>
          <Image src={coverImage ?? ''} alt={title} width={1920} height={1080} objectPosition={'center'} />
        </picture>
      </div>
      <div className=" w-full  py-16">
        <div className="max-w-screen-2xl w-11/12 mx-auto text-neutral-300 space-y-8">
          <div className="space-y-2">
            <span className="text-sm">{category}</span>
            <h1 className="text-5xl font-semibold">{title}</h1>
          </div>
          <p className="w-1/2 text-lg leading-snug ">{description}</p>
          <div className="grid grid-cols-4">
            {roles && (
              <div>
                <h3 className="text-lg text-neutral-100">Position</h3>
                <ul>
                  {roles?.map((role, i) => (
                    <li key={i}>{role}</li>
                  ))}
                </ul>
              </div>
            )}
            {collaborators && (
              <div className="space-y-4">
                <h3 className="text-lg text-neutral-100">Collaborators</h3>
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
                <h3 className="text-lg text-neutral-100">Tech stack</h3>
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
                <h3 className="text-lg text-neutral-100">Tags</h3>
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
    </section>
  )
}

