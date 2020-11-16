import Navbar from './layout/Navbar'
import Menu from './components/Menu'
import s from './App.module.css'

function App () {
  const options = [
    'About',
    'Projects',
    '🚀'
  ]

  return (
    <div className={s.gridContainer}>
      <Navbar selection={options} />
      <Menu selection={options} />
    </div>
  )
}

export default App
