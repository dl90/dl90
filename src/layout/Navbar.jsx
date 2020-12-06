import React, { useState, useEffect } from 'react'
import s from './Navbar.module.css'
import logoSM from '../assets/logo/logo-sm.png'

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

  const options = props.selection.map((item, idx) =>
    <h6 key={idx} className={s.link} onClick={() => props.refProps[item]?.current?.scrollIntoView()}>
      {item}
    </h6>)

  const scrollTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <nav className={s.navbarContainer} id='nav'>
      <div className={s.section}>
        <img src={logoSM} alt='personal logo' className={s.logoSM} onClick={scrollTop} />
        <div className={s.menuSelection}>{options}</div>
      </div>
    </nav>
  )
}
