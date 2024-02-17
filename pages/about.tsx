import { Layout } from 'components/layout/layout'
import { DescriptionSection } from 'components/sections/about'

const About = () => {
  return (
    <Layout
      metadata={{
        title: 'Jilver Pacheco',
        description: 'Software developer + electronic engineer'
      }}
    >
      <DescriptionSection />
    </Layout>
  )
}

export default About

