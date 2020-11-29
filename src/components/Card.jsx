import React from 'react'
import s from './Card.module.css'

import Icon from './Icon'
import Slider from './Slider'

export default function Card (props) {
  const icons = props.icons.map((img, idx) => {
    return <Icon img={img} key={idx} />
  })

  return (
    <div>
      <div className={s.cardContainer}>
        <Slider images={props.images} />
        <div className={s.content}>
          <h3 className={s.title}>{props.title}</h3>
          <p>{props.description}</p>
          {props.repo && <a className={s.link} href={props.repo}>Github</a>}
          <div className={s.iconGrid}>
            {icons}
          </div>
        </div>
      </div>
    </div>
  )
}
