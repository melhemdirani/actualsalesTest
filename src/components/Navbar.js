import React from 'react'
import Logo from '../Images/logo-color.png'
import Dropdown from './Dropdown'

function Navbar() {
  return (
    <div className="Navbar" >
      <img src={Logo} alt="HealthMax" className="navbar_logo"/>
      <div>
        <a href="#offers" className="Navbar_about hidden">Offers</a>
        <a href="#contact" className="Navbar_about hidden">Contact</a>
        <a href="#services" className="Navbar_services hidden">Services</a>
      </div>
      <div className="hidden2">
        <Dropdown />
      </div>
    </div>
  )
}

export default Navbar
