import React from 'react'
import {BsInstagram, BsFacebook, BsFillTelephoneFill} from 'react-icons/bs'
import '../css/ContactSidebar.css'

function ContactSidebar() {
  return (
    <div className='contact'>
        <a href=''>
            <BsFillTelephoneFill id='phone' className='icon' title='(518) 364-1554' />
        </a>
        <br />

        <a href='https://www.instagram.com/adirondack__upcycled/?hl=en' target='_blank'>
            <BsInstagram id='instagram' className='icon' />
        </a>
        <br />

        <a href='https://www.facebook.com/AdirondackUpcycled' target='_blank'>
            <BsFacebook id='facebook' className='icon' />
        </a>
        <div className='vertLine'></div>
    </div>
  )
}

export default ContactSidebar