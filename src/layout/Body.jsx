import React from 'react'
import s from './Body.module.css'

import Menu from './sections/Menu'
import About from './sections/About'
import Project from './sections/Project'

export default function Body (props) {
  return (
    <div className={s.gridContainer}>
      <Menu selection={props.options} />
      <About />
      <Project />
    </div>
  )
}
