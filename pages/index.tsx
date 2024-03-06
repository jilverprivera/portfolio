import type { GetStaticProps, NextPage } from 'next'
import { Layout } from 'components/layout'
import { Hero, Portfolio, Projects } from 'components/sections'
import { FrontMatter, ProjectProps } from 'interfaces'
import { getAllFilesMetadata } from 'lib/mdx'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async () => {
  let projects = await getAllFilesMetadata('portfolio')
  projects = projects
    .filter((el: FrontMatter) => el.finished)
    // .slice(0, 5)
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
      {/* <Projects projects={projects} /> */}
      <Portfolio projects={projects} />

      <div>
        <h3></h3>
        <span>Interested? check out my complete portfolio</span>

        <Link href={'/work'}>
          <a>View more work</a>
        </Link>
      </div>
    </Layout>
  )
}

export default Home

