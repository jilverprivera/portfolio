import { ProjectCard } from 'components/ui/project-card'
import { ProjectCardV2 } from 'components/ui/project-card-v2'
import { IFrontMatter } from 'interfaces'

type props = {
  projects: IFrontMatter[]
  newestProject: IFrontMatter
}

export const MyWorksSection = ({ projects }: props) => {
  return (
    <section className="mt-24 pb-48 max-w-screen-3xl mx-auto  w-11/12">
      <div className="w-full ">
        {projects.map((project) => (
          <ProjectCardV2 key={project.slug} project={project} />
        ))}
        {/* <ProjectCard projects={projects} reversed={false} start={0} finish={1} /> */}
      </div>
    </section>
  )
}

