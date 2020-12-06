import React from 'react'
import './Body.css'

import Menu from './sections/Menu'
import About from './sections/About'
import Project from './sections/Projects'
import Contact from './sections/Contact'

export default function Body (props) {
  return (
    <div className='gridContainer'>
      <Menu selection={props.options} refProps={props.refProps} />
      <About refProps={props.refProps} />
      <Project refProps={props.refProps} />
      <Contact refProps={props.refProps} />
    </div>
  )
}
