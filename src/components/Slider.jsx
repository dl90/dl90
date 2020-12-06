import React, { useEffect, useRef } from 'react'
import s from './Slider.module.css'

export default function Slider (props) {
  const slider = useRef(null)
  const prev = () => slider.current.scrollBy({ left: -200, behavior: 'smooth' })
  const next = () => slider.current.scrollBy({ left: 200, behavior: 'smooth' })
  useEffect(() => slider.current.scrollBy({ left: 0 }), [])

  return (
    <div className={s.sliderContainer}>
      <button onClick={prev} className={s.btn}>&#60;</button>
      <div className={s.slider} ref={slider}>
        {props.images?.map((img, idx) => <img key={idx} src={img} className={s.slide} alt='project' />)}
      </div>
      <button onClick={next} className={s.btn}>&#62;</button>
    </div>
  )
}
