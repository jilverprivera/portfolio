/* eslint-disable react/no-unescaped-entities */
import { Layout } from 'components/layout'
import { Background } from 'components/sections/about/background'
import { Pillars } from 'components/sections/about/pillars'

const About = () => {
  return (
    <Layout
      metadata={{
        title: 'Jilver Pacheco',
        description: 'Software developer + electronic engineer'
      }}
    >
      <Background />
      <Pillars />
    </Layout>
  )
}

export default About

