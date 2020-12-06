import React, { useRef, useContext } from 'react'
import Provider, { Context } from './context/provider'

import Navbar from './layout/Navbar'
import Body from './layout/Body'
import Footer from './layout/Footer'

function App () {
  const context = useContext(Context)
  console.log(context)

  const options = [
    'About',
    'Projects',
    'Contact'
  ]
  const refs = {
    About: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null)
  }

  return (
    <Provider>
      <Navbar selection={options} refProps={refs} />
      <Body options={options} refProps={refs} />
      <Footer />
    </Provider>
  )
}

export default App
