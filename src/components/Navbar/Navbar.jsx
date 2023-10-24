import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>

      <div id="navbar">
        <div class="col1">
        <p>home</p>
        <p>about me</p>
        <p>contact</p>
        <p>iterations</p>
        </div>
        <div class="col2">
        <div class="light">
        <button class="fill">light mode</button>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar