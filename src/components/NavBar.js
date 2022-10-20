import React, {useState} from 'react'
import {BsCart4} from 'react-icons/bs'
import {TiThMenu} from 'react-icons/ti'
import {VscChromeClose} from 'react-icons/vsc'
import '../css/NavBar.css'

function NavBar() {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const closeMenu = () => setClick(false)

  return (
    <div className='header'>
        <nav className='navbar'>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <a href=''>
                        HOME
                    </a>
                </li>

                <li className='nav-item'>
                    <a href=''>
                        ABOUT
                    </a>
                </li>

                <li className='nav-item'>
                    <a href=''>
                        EVENTS
                    </a>
                </li>

                <li className='nav-item'>
                    <a href=''>
                        SHOP
                    </a>
                </li>
            </ul>

            <BsCart4 />

            <div className='hamburger' onClick={handleClick}>
                    {click ? <VscChromeClose /> : <TiThMenu />} 
            </div>
        </nav>    
    </div>
  )
}

export default NavBar