import React from 'react'
import phone from '../Images/contact_phone.png'
import facebook from '../Images/contact_facebook.png'
import instagram from '../Images/contact_instagram.png'
import logo from '../Images/logo-white.png'


function Footer() {
  return (
    <div className="footer_container" id="contact">
        <h1 className="footer_title">Contact Us</h1>
        <p className="footer_text"> <a href="mailto:health@care.com" className="footer_email">Click here</a> to send us an Email or click on one of the buttons bellow</p>
        <div className="contact_info">
            <a href="https://www.instagram.com/" target='_blank' rel="noreferrer"><img src={instagram} alt="" className="contact_icons" /></a>
            <a href="https://www.facebook.com/" target='_blank' rel="noreferrer"><img src={facebook} alt=""  className="contact_icons"  /></a>
            <a href="tel:00000000"><img src={phone} alt=""  className="contact_icons"  /></a>
        </div>
        <a href="#about"><img src={logo} alt="" className="footer_logo" /></a>
    </div>
  )
}

export default Footer
