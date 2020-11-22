import React from 'react'
import s from './Icon.module.css'

export default function Icon (props) {
  return (
    <div className={s.iconContainer}>
      <img src={props.img} />
    </div>
  )
}
