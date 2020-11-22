import React from 'react'
import './Body.css'

import Menu from './sections/Menu'
import About from './sections/About'
import Project from './sections/Project'

export default function Body (props) {
  return (
    <div className='gridContainer'>
      <Menu selection={props.options} />
      <About />
      <Project />
    </div>
  )
}
