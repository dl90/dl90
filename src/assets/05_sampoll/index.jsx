import React from 'react'
import Card from '../../components/Card'

import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'

import js from '../icon/js.svg'
import mysql from '../icon/mysql.png'
import node from '../icon/node.png'

export default function Project () {
  const desc =
    'My first project using MySQL, intended to schedule meetings. Not the cleanest but was a great learning experience.'
  const repo = 'https://github.com/dl90/scheduler'
  const icons = [js, mysql, node]
  const images = [img1, img2, img3, img4]

  return <Card title='Scheduler' icons={icons} images={images} description={desc} repo={repo} />
}
