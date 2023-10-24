import React from 'react'
import './Links.css'

const Links = () => {
  return (
    <div id="contact">
      <div class="form">
      <p>If you believe in the old ways, drop me a message:</p>
      
        <form>
          <input type="text" name="Name" placeholder="Your name" required></input>
          <input type="email" name="email" placeholder="Your email address" required></input>
          <textarea name="Message" rows="6" placeholder="Your message"></textarea>
          
          <button class="fill submit">Submit</button>
          
        </form>
      </div>

    </div>
  )
}

export default Links