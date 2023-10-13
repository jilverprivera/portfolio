import { GetStaticProps, NextPage } from 'next'
import { LayoutHOC } from 'components/layout'
import { getAllFilesMetadata } from 'lib/mdx'
import { IFrontMatter, IPlaygroundPageProps } from 'interfaces'
import { ProjectCardV2 } from 'components/ui/project-card-v2'

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  let playground = await getAllFilesMetadata('playground')
  playground = playground.sort((a: IFrontMatter, b: IFrontMatter) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  return { props: { playground } }
}

const Playground: NextPage<IPlaygroundPageProps> = ({ playground }) => {
  return (
    <LayoutHOC metadata={{ title: 'Playground – Jilver Pacheco', description: 'Software developer + electronic engineer.' }}>
      <section className="mt-32 max-w-screen-3xl mx-auto w-11/12">
        {playground.map((project) => (
          <ProjectCardV2 key={project.slug} project={project} />
        ))}
      </section>
    </LayoutHOC>
  )
}

export default Playground

