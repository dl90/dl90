import React from 'react'

import Profile from '../../assets/00_about/About'

export default function About (props) {
  return (
    <section ref={props.refProps.About}>
      <h1 className='sectionTitle'>About</h1>
      <div className='content'>
        <Profile />
      </div>
    </section>
  )
}
