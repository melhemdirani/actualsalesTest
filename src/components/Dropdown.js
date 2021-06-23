import React from 'react'
import './Dropdown.css'
import menu from '../Images/navbar_menu.png'

function Dropdown() {
  return (
    <div className="navbar">
        <div className="dropdown">
        <button className="dropbtn">
            <img src={menu} alt="" className="menu_icon"/>
            <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
            <a href="#offers">Offers </a>
            <a href="#contact">Contact</a>
            <a href="#services">Services </a>
        </div>
        </div> 
    </div>
  )
}

export default Dropdown
