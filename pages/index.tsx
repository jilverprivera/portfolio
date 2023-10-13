import type { GetStaticProps, NextPage } from 'next'
import { LayoutHOC } from 'components/layout'
import { HeroSection, DescriptionSection, MyWorksSection } from 'components/sections'
import { getAllFilesMetadata } from 'lib/mdx'
import { IFrontMatter, IHomeProps } from 'interfaces'

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllFilesMetadata('projects')
  const workProjects = projects
    .filter((el: IFrontMatter) => el.isPublished)
    .sort((a: IFrontMatter, b: IFrontMatter) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  const newestProject = projects.find((el: IFrontMatter) => el.isPublished && el.current)
  return { props: { projects: workProjects, newestProject } }
}

const Home: NextPage<IHomeProps> = ({ projects, newestProject }) => {
  return (
    <LayoutHOC metadata={{ title: 'Jilver Pacheco', description: 'Software developer + electronic engineer' }}>
      <HeroSection />
      <DescriptionSection />
      <MyWorksSection projects={projects} newestProject={newestProject} />
    </LayoutHOC>
  )
}

export default Home

