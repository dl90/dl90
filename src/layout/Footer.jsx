import React from 'react'
import s from './Footer.module.css'

export default function Footer (props) {
  return (
    <footer>
      <div>
        <p className={s.copyright}>
          Copyright © 2020 Don L.
        </p>
      </div>
    </footer>
  )
}
