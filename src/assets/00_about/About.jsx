import React from 'react'
import s from './About.module.css'

import img from './img/1.jpg'

export default function About (props) {
  const desc = [
    'Hi, this is Don. I am currently attending BCIT’s Full Stack Web Development program, expecting to graduate in June, 2021.',
    "Over the course of this program, I've had the pleasure to work on numerous team-based projects dealing with both the front-end and the backend. This experience had helped me understand the structure of web applications, how each part interacts with one another, and how to work effectively in a fast-paced, team-based environment",
    'Some examples of these projects can be found below.',
    'Cheers'
  ]

  return (
    <div className={s.aboutContainer}>
      <div className={s.imgContainer}>
        <img src={img} className={s.img} alt='it is I' />
      </div>
      <div className={s.txtContainer}>
        {desc.map((content, idx) => <p key={idx}>{content}</p>)}
      </div>
    </div>
  )
}
