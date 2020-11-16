import React, { useState, useEffect } from 'react'
import s from './Navbar.module.css'

export default function Navbar (props) {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const height = window.innerHeight / 1.4
    window.addEventListener('scroll', () => {
      window.pageYOffset > height
        ? setShowNav(true)
        : setShowNav(false)
    })
    return () => window.removeEventListener('scroll')
  }, [])

  useEffect(() => {
    const nav = document.querySelector('#nav')
    showNav
      ? nav.classList.add(s.show)
      : nav.classList.remove(s.show)
  }, [showNav])

  return (
    <div className={s.navbarContainer} id='nav'>
      <div className={s.section}>
        <img src='/logo-sm.png' alt='personal logo' className={s.logoSM} />
        <MenuSelection options={props.selection} />
      </div>
    </div>
  )
}

function MenuSelection (props) {
  const options = props.options.map((item, idx) =>
    <h5 key={idx} className={s.link}>{item}</h5>)
  return <div className={s.menuSelection}>{options}</div>
}
