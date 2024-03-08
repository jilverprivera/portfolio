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
        description="I am energized by exploring, creating and always hungry for the unknown. I love being able to provide solutions to personally challenging problems that push me out of my comfort zone."
      />
      <Background />
      <Experience />
      <Awards />
    </Layout>
  )
}

export default About

