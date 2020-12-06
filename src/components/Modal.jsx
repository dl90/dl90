import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import s from './Modal.module.css'

import Slider from './Slider'

export default function Modal (props) {
  const { isShowing, hide } = props
  const ref = useRef(null)

  useEffect(() => {
    const listener = event => {
      if (ref.current && !ref.current.contains(event.target)) hide()
    }

    document.addEventListener('mousedown', listener)
    return () => document.removeEventListener('mousedown', listener)
  }, [hide])

  if (isShowing) {
    return ReactDOM.createPortal(
      <>
        <div className={s.overlay} />
        <div className={s.wrapper} aria-modal aria-hidden tabIndex={-1} role='dialog'>
          <div className={s.modal} ref={ref}>
            <div className={s.modalHeader}>
              <h6 className={s.modalTitle}>{props.title}</h6>
              <button type='button' className={s.closeButton} data-dismiss='modal' aria-label='Close' onClick={hide}>x</button>
            </div>
            <Slider images={props.images} />
          </div>
        </div>
      </>, document.body)
  }
  return null
}
