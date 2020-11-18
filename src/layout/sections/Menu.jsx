import React from 'react'
import s from './Menu.module.css'
import logoLG from '../../assets/logo/logo-lg.png'

export default function Menu (props) {
  return (
    <section>
      <div className={s.menuContainer}>
        <div className={s.logoContainer}>
          <img src={logoLG} alt='personal-logo' className={s.logoImg} />
          <div className={s.logoTxtContainer}>
            <h3 className={s.logoTxt}>Full</h3>
            <h3 className={s.logoTxt}>Stack</h3>
            <h3 className={s.logoTxt}>Web</h3>
            <h3 className={s.logoTxt}>Dev</h3>
          </div>
        </div>
        <hr />
        <div className={s.optionsContainer}>
          <MenuSelection options={props.selection} />
        </div>
      </div>
    </section>
  )
}

function MenuSelection (props) {
  const options = props.options.map((item, idx) =>
    <h1 key={idx} className={s.logoTxt}>{item}</h1>)
  return <div>{options}</div>
}
