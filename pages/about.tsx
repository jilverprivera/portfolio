import { Layout } from 'components/layout'
import { PageTitle } from 'components/ui/shared'
import { Background, Awards, Experience } from 'components/sections'

const About = () => {
  return (
    <Layout
      metadata={{
        title: 'Jilver Pacheco',
        description: 'Software developer + electronic engineer'
      }}
    >
      <PageTitle
        title="Hey, I'm Jilver."
        description="I get energy from exploring and creating. Always hungry for the unknown. Design is like that - being comfortable in the vagueness, uncertain what the outcomes will be, constantly discovering and adjusting."
      />
      <Background />
      <Experience />
      <Awards />
    </Layout>
  )
}

export default About

