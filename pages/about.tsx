import { Layout } from 'components/layout'
import { PageTitle } from 'components/ui/shared/page-title'
import { Background } from 'components/sections/background'
import { Experience } from 'components/sections/experience'
import { Awards } from 'components/sections/awards'

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

