import React, { useRef } from 'react'

import Navbar from './layout/Navbar'
import Body from './layout/Body'
import Footer from './layout/Footer'

function App () {
  const options = [
    'About',
    'Projects',
    'Contact'
  ]
  const About = useRef(null)
  const Projects = useRef(null)
  const Contact = useRef(null)
  const refs = { About, Projects, Contact }

  return (
    <div>
      <Navbar selection={options} refProps={refs} />
      <Body options={options} refProps={refs} />
      <Footer />
    </div>
  )
}

export default App
