import { GetStaticProps, NextPage } from 'next'
import { getAllFilesMetadata } from 'lib/mdx'
import { IFrontMatter, ProjectProps } from 'interfaces'
import { Layout } from 'components/layout'
import { Portfolio } from 'components/sections/home'

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  let projects = await getAllFilesMetadata('portfolio')
  projects = projects.sort(
    (a: IFrontMatter, b: IFrontMatter) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
  return { props: { projects } }
}

const PortfolioPage: NextPage<ProjectProps> = ({ projects }) => {
  // const [searchedArticles, setSearchedArticles] = useState<string>('')

  // const filteredPosts = projects.filter((post: IFrontMatter) =>
  //   post.title.toLowerCase().includes(searchedArticles.toLowerCase())
  // )
  return (
    <Layout
      metadata={{
        title: 'Work – Jilver Pacheco',
        description: 'Software developer + electronic engineer.'
      }}
    >
      <Portfolio projects={projects} />
    </Layout>
  )
}

export default PortfolioPage

