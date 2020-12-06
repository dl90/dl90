import React from 'react'
import s from './Card.module.css'

import Icon from './Icon'
import useModal from '../hook/useModal'
import Modal from './Modal'

export default function Card (props) {
  const { isShowing, toggle } = useModal()

  const icons = props.icons.map((img, idx) => {
    return <Icon img={img} key={idx} />
  })

  return (
    <div>
      <Modal isShowing={isShowing} hide={toggle} images={props.images} title={props.title} />
      <div className={s.cardContainer}>
        <div className={s.imgContainer}>
          <img src={props.images[0]} onClick={toggle} className={s.img} />
        </div>
        <div className={s.content}>
          <h3 className={s.title}>{props.title}</h3>
          <p>{props.description}</p>
          {props.repo && <a href={props.repo} target='_blank' rel='noreferrer'>Github</a>}
          <div className={s.iconGrid}>
            {icons}
          </div>
        </div>
      </div>
    </div>
  )
}
