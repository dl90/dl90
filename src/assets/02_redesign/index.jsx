import React from 'react'
import Card from '../../components/Card'

import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'

import js from '../icon/js.svg'
import fb from '../icon/fb.png'
import vue from '../icon/vue.svg'

export default function Project () {
  const desc =
    'Ported a previous assignment (static site) to Vue and added additional functionality. Users can sign-up, create posts, comment with all the info is saved to firebase'
  const repo = 'https://github.com/dl90/challenges/tree/main/vue/redesign'
  const icons = [js, fb, vue]
  const images = [img1, img2, img3, img4]

  return <Card title='Redesign' icons={icons} images={images} description={desc} repo={repo} />
}
