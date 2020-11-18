import Navbar from './layout/Navbar'
import Body from './layout/Body'

function App () {
  const options = [
    'About',
    'Projects',
    '🚀'
  ]

  return (
    <div>
      <Navbar selection={options} />
      <Body options={options} />
    </div>
  )
}

export default App
