import { Layout } from 'components/layout'
import { Background, Experience, Awards } from 'components/sections/about'
import { PageTitle } from 'components/ui'

const About = () => {
  return (
    <Layout
      metadata={{
        title: 'Jilver Pacheco',
        description: 'Software developer + electronic engineer'
      }}
    >
      <PageTitle
        title="About"
        description="I get energy from exploring and creating. Always hungry for the unknown. Design is like that - being comfortable in the vagueness, uncertain what the outcomes will be, constantly discovering and adjusting."
      />
      <Background />
      <Experience />
      <Awards />
    </Layout>
  )
}

export default About

