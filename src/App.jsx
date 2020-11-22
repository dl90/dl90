import React from 'react'

import Navbar from './layout/Navbar'
import Body from './layout/Body'
import Footer from './layout/Footer'

function App () {
  const options = [
    'About',
    'Projects'
  ]

  return (
    <div>
      <Navbar selection={options} />
      <Body options={options} />
      <Footer />
    </div>
  )
}

export default App
