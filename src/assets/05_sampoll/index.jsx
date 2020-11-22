import React from 'react'
import Card from '../../components/Card'

import img1 from './img/1.png'

import js from '../icon/js.svg'
import mysql from '../icon/mysql.png'
import node from '../icon/node.png'

export default function Project () {
  const desc =
    'My first project using MySQL, intended to schedule meetings. Not the cleanest but was a great learning experience.'
  const repo = 'https://github.com/dl90/scheduler'

  return <Card title='Scheduler' icons={[js, mysql, node]} img={img1} description={desc} repo={repo} />
}
