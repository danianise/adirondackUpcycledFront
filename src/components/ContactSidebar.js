import React from 'react'
import {BsInstagram, BsFacebook, BsFillTelephoneFill} from 'react-icons/bs'
import '../css/ContactSidebar.css'

function ContactSidebar() {
  return (
    <div className='contact'>
        <a href=''>
            <BsFillTelephoneFill id='phone' className='icon' />
        </a>
        <br />

        <a href='' target='_blank'>
            <BsInstagram id='instagram' className='icon' />
        </a>
        <br />

        <a href='' target='_blank'>
            <BsFacebook id='facebook' className='icon' />
        </a>
        <div className='vertLine'></div>
    </div>
  )
}

export default ContactSidebar