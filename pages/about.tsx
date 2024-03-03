import { Layout } from 'components/layout'
import { Background } from 'components/sections/about/background'
import { Experience } from 'components/sections/about/experience'
import { Pillars } from 'components/sections/about/pillars'
import { PageTitle } from 'components/ui/page-title'

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
      <Experience/>
      <Pillars />
    </Layout>
  )
}

export default About

