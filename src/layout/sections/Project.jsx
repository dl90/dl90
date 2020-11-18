import React from 'react'
import s from './Project.module.css'

import Card from '../../components/Card'
import js from '../../assets/icon/js.svg'
import redesignImg1 from '../../assets/image/redesign/1.png'


export default function Project () {
  return (
    <section>
      <h1>Projects</h1>
      <div className={s.projectsContainer}>
        <Card title='Redesign' icons={[js]} img={redesignImg1} description='This project involved redesigning and porting an old static site to vue' />
      </div>
    </section>
  )
}
