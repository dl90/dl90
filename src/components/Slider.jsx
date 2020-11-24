import React, { useState } from 'react'
import s from './Slider.module.css'

import img1 from '../assets/02_redesign/img/1.png'
import img2 from '../assets/02_redesign/img/2.png'
import img3 from '../assets/02_redesign/img/3.png'
import img4 from '../assets/02_redesign/img/4.png'

export default function Slider () {
  const imgs = [img1, img2, img3, img4]
  return (
    <div className={s.slider}>
      {imgs.map((img, idx) => <img key={idx} src={img} className={s.slide} style={{ transform: `translateX(${idx}%)` }} />)}
    </div>
  )
}
