import React from 'react'
import s from './Menu.module.css'
import logoLG from '../../assets/logo/logo-lg.png'

export default function Menu (props) {
  const options = props.selection.map((item, idx) =>
    <h1 key={idx} className={s.logoTxt} onClick={() => { props.refProps[item]?.current?.scrollIntoView() }}>{item}</h1>)

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
          <div>{options}</div>
        </div>
      </div>
    </section>
  )
}
