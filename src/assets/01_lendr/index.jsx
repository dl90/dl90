import React from 'react'
import Card from '../../components/Card'

import img1 from './img/1.png'

import js from '../icon/js.svg'
import node from '../icon/node.png'
import mysql from '../icon/mysql.png'
import aws from '../icon/aws.png'
import react from '../icon/react.svg'

export default function Project () {
  const desc =
    'Team project created in association with 4 design students. Currently under development. '
  const repo = 'https://github.com/dl90/lendr'

  return <Card title='Lendr' icons={[js, node, mysql, aws, react]} img={img1} description={desc} repo={repo} />
}
