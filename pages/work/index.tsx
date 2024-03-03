import { GetStaticProps, NextPage } from 'next'
import { getAllFilesMetadata } from 'lib/mdx'
import { IFrontMatter, ProjectProps } from 'interfaces'
import { Layout } from 'components/layout'
import { Portfolio } from 'components/sections/home'
import { PageTitle } from 'components/ui/page-title'

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  let projects = await getAllFilesMetadata('portfolio')
  projects = projects.sort(
    (a: IFrontMatter, b: IFrontMatter) =>
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
      <PageTitle title='Work' description='A selection of web & mobile development and engineering projects.'/>
      <Portfolio projects={projects} />
    </Layout>
  )
}

export default PortfolioPage

