import React from 'react'
import s from './Projects.module.css'

import Lendr from '../../assets/01_lendr/index'
import Redesign from '../../assets/02_redesign/index'
import Game from '../../assets/03_game/index'
import Flask from '../../assets/04_flask/index'
import Sampoll from '../../assets/05_sampoll/index'

export default function Projects (props) {
  return (
    <section ref={props.refProps.Projects}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className='content'>
        <div className={s.projectGrid}>
          <Lendr />
          <Redesign />
          <Game />
          <Flask />
          <Sampoll />
        </div>
      </div>
    </section>
  )
}
