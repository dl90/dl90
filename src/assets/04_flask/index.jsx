import React from 'react'
import Card from '../../components/Card'

import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'

import py from '../icon/py.png'
import flask from '../icon/flask.png'

export default function Project () {
  const desc =
    'Flask server that allows users to search for music artists and save them.'
  const repo = 'https://github.com/dl90/Flask'
  const icons = [py, flask]
  const images = [img1, img2, img3, img4]

  return <Card title='Flask' icons={icons} images={images} description={desc} repo={repo} />
}
