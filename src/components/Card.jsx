import React from 'react'
import Icon from './Icon'
import s from './Card.module.css'

export default function Card (props) {
  const icons = props.icons.map((img, idx) => {
    return <Icon img={img} key={idx} />
  })

  return (
    <div>
      <div className={s.cardContainer}>
        <img src={props.img} className={s.img} alt='Project screenshot' />
        <div className={s.content}>
          <h3 className={s.title}>{props.title}</h3>
          <p>{props.description}</p>
          <a className={s.link} href={props.repo}>Github</a>
          <div className={s.iconGrid}>
            {icons}
          </div>
        </div>
      </div>
    </div>
  )
}
