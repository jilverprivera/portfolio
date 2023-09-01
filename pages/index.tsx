import type { GetStaticProps, NextPage } from 'next'
import { Layout } from 'components/layout'
import { Hero, WorkExperience, Projects } from 'components'
import { getAllFilesMetadata } from 'lib/mdx'
import { IFrontMatter, IHomeProps } from 'interfaces'

export const getStaticProps: GetStaticProps = async () => {
  let projects = await getAllFilesMetadata('projects')
  projects = projects
    .filter((el: IFrontMatter) => el.isPublished)
    .sort((a: IFrontMatter, b: IFrontMatter) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  return { props: { projects } }
}

const Home: NextPage<IHomeProps> = ({ projects }) => {
  return (
    <Layout metadata={{ title: 'Jilver Pacheco', description: 'Software developer + electronic engineer' }}>
      <Hero />
      <WorkExperience />
      <Projects projects={projects} />
    </Layout>
  )
}

export default Home

