import React from 'react'
import Icon from './Icon'
import s from './Card.module.css'

export default function Card (props) {
  const icons = props.icons.map((img, idx) => {
    return <Icon img={img} key={idx} />
  })

  return (
    <div>
      <div className={s.cardContainer} >
        <img src={props.img} className={s.img} />
        <div className={s.content} >
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div className={s.iconGrid} >
            {icons}
          </div>
        </div>
      </div>
    </div>
  )
}
