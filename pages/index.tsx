import type { GetStaticProps, NextPage } from 'next'
import { Layout } from 'components/layout'
import { Hero } from 'components/sections/hero'
import { Portfolio } from 'components/sections/portfolio'
import { FrontMatter, ProjectProps } from 'interfaces'
import { getAllFilesMetadata } from 'lib/mdx'

export const getStaticProps: GetStaticProps = async () => {
  let projects = await getAllFilesMetadata('portfolio')
  projects = projects
    .filter((el: FrontMatter) => el.finished)
    .slice(0, 5)
    .sort(
      (a: FrontMatter, b: FrontMatter) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  return { props: { projects } }
}

const Home: NextPage<ProjectProps> = ({ projects }) => {
  return (
    <Layout
      metadata={{
        title: 'Jilver Pacheco',
        description: 'Software developer + electronic engineer'
      }}
    >
      <Hero />
      <Portfolio projects={projects} />
    </Layout>
  )
}

export default Home

