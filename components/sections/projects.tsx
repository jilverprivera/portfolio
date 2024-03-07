import { WorkCard } from 'components/ui/work/card'
import { FrontMatter } from 'interfaces'

export const Projects = ({ projects }: { projects: FrontMatter[] }) => {
  return (
    <section className="max-w-screen-3xl w-11/12 mx-auto">
      <div>
        <h2 className="text-8xl font-medium text-neutral-200 mb-12">
          My projects
        </h2>
        {projects.map((project) => {
          return <WorkCard key={project.slug} {...project} />
        })}
      </div>
    </section>
  )
}

