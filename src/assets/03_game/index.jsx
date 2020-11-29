import React from 'react'
import Card from '../../components/Card'

import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'

import js from '../icon/js.svg'
import fb from '../icon/fb.png'
import heroku from '../icon/heroku.svg'
import node from '../icon/node.png'

export default function Project () {
  const desc = 'Fun team project created in association with 4 design students using Phaser. The story revolves around a lost dog on a journey to find its family members. Featuring original art, music and storyline by the design students, and has 12 levels.'
  const repo = 'https://github.com/dl90/team-zain'
  const icons = [js, fb, node, heroku]
  const images = [img1, img2, img3, img4, img5]

  return <Card title='Game' icons={icons} images={images} description={desc} repo={repo} />
}
