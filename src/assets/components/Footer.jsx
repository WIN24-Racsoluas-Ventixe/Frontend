import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p className="footer-copyright-text">Copyright © 2025</p>
      <NavLink>Privacy Policy</NavLink>
      <NavLink>Term and conditions</NavLink>
      <NavLink>Contact</NavLink>

      </footer>
  )
}

export default Footer