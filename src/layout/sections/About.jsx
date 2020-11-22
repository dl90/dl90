import React from 'react'
import s from './About.module.css'
import img from '../../assets/image/about/1.jpg'

export default function About (props) {
  return (
    <section id='About'>
      <h1 className='sectionTitle'>About</h1>
      <div className='content'>
        <div className={s.imgContainer}>
          <img src={img} className={s.img} />
        </div>
        <div className={s.txtContainer}>
          <p>Hi, this is Don. I am currently attending BCIT’s Full Stack Web Development program, expecting to graduate in June, 2021.</p>
          <p>Over the course of this program, I've had the pleasure to work on numerous team-based projects dealing with both the front-end and the backend. This experience had helped me understand the structure of web applications, how each part interacts with one another, and how to work effectively in a fast-paced, team-based environment.</p>
          <p>Some examples of these projects can be found listed below, they may not be the most polished, but does share insight on my skills progression.</p>
          <p>Cheers</p>
        </div>
      </div>
    </section>
  )
}
