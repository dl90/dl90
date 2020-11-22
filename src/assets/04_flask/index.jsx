import React from 'react'
import Card from '../../components/Card'

import img1 from './img/1.png'

import py from '../icon/py.png'
import flask from '../icon/flask.png'

export default function Project () {
  const desc =
    'Flask server that allows users to search music artists and save them.'
  const repo = 'https://github.com/dl90/Flask'

  return <Card title='Flask' icons={[py, flask]} img={img1} description={desc} repo={repo} />
}
