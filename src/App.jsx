import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Aboutme from './components/Aboutme/Aboutme'
import Links from './components/Links/Links'
import Iterations from './components/Iterations/Iterations'

const App = () => {
  return (
    <div>
      <Navbar /> <Home /> <Aboutme /> <Links /> <Iterations />
    </div>
  )
}

export default App