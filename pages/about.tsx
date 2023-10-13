import { LayoutHOC } from 'components/layout'
import React from 'react'

const About = () => {
  return (
    <LayoutHOC metadata={{ title: 'Jilver Pacheco', description: 'Software developer + electronic engineer' }}>
      <p>about</p>
    </LayoutHOC>
  )
}

export default About

