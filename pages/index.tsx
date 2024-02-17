import type { GetStaticProps, NextPage } from 'next'
import { Layout } from 'components/layout'
import { HeroSection, PortfolioSection } from 'components/sections/home'
import { PROJECTS } from 'utils/resources/projects'
import { IFrontMatterV2, IHomeProps } from 'interfaces'
import { DescriptionSection } from 'components/sections/about'

export const getStaticProps: GetStaticProps = async () => {
  const projects = PROJECTS.filter((el: IFrontMatterV2) => el.published).sort(
    (a: IFrontMatterV2, b: IFrontMatterV2) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
  return { props: { projects } }
}

const Home: NextPage<IHomeProps> = ({ projects }) => {
  return (
    <Layout
      metadata={{
        title: 'Jilver Pacheco',
        description: 'Full-stack developer + Electronic engineer'
      }}
    >
      <DescriptionSection />
      <PortfolioSection projects={projects} />
    </Layout>
  )
}

export default Home

