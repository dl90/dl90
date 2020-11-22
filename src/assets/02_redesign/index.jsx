import React from 'react'
import Card from '../../components/Card'

import img2 from './img/2.png'

import js from '../icon/js.svg'
import fb from '../icon/fb.png'
import vue from '../icon/vue.svg'

export default function Project () {
  const desc =
    'Ported a previous assignment (static site) to Vue and added additional functionality. Users can sign-up, create posts, comment with all the info is saved to firebase'
  const repo = 'https://github.com/dl90/challenges/tree/main/vue/redesign'

  return <Card title='Redesign' icons={[js, fb, vue]} img={img2} description={desc} repo={repo} />
}
