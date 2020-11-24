import React from 'react'
import './Body.css'

// import Slider from '../components/Slider'
import Menu from './sections/Menu'
import About from './sections/About'
import Project from './sections/Projects'

export default function Body (props) {
  return (
    <div className='gridContainer'>
      {/* <Slider /> */}
      <Menu selection={props.options} refProps={props.refProps} />
      <About refProps={props.refProps} />
      <Project refProps={props.refProps} />
    </div>
  )
}
