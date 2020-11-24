import React from 'react'
import Card from '../../components/Card'

import img1 from './img/1.png'

import js from '../icon/js.svg'
import fb from '../icon/fb.png'
import heroku from '../icon/heroku.svg'
import node from '../icon/node.png'

export default function Project () {
  const desc = 'Fun team project created in association with 4 design students using Phaser. The story revolves around a lost dog on a journey to find its family members. Featuring original art, music and storyline by the design students, and has 12 levels.'
  const repo = 'https://github.com/dl90/team-zain'

  return <Card title='Game' icons={[js, fb, node, heroku]} img={img1} description={desc} repo={repo} />
}
