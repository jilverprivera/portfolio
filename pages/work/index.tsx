import { GetStaticProps, NextPage } from 'next'
import { getAllFilesMetadata } from 'lib/mdx'
import { FrontMatter, ProjectProps } from 'interfaces'
import { Layout } from 'components/layout'
// import { Portfolio } from 'components/non-used/portfolio'
import { PageTitle } from 'components/ui/shared/page-title'

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  let projects = await getAllFilesMetadata('portfolio')
  projects = projects.sort(
    (a: FrontMatter, b: FrontMatter) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
  return { props: { projects } }
}

const PortfolioPage: NextPage<ProjectProps> = ({ projects }) => {
  return (
    <Layout
      metadata={{
        title: 'Work – Jilver Pacheco',
        description: 'Software developer + electronic engineer.'
      }}
    >
      <PageTitle
        title="Work"
        description="A selection of web & mobile development and engineering projects."
      />
      {/* <Portfolio projects={projects} /> */}
    </Layout>
  )
}

export default PortfolioPage

