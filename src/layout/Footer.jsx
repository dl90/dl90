import React from 'react'
import s from './Footer.module.css'

export default function Footer (props) {
  return (
    <footer>
      <div>
        <h6 className={s.copyright}>
          Copyright © 2020 Don L.
        </h6>
      </div>
    </footer>
  )
}
