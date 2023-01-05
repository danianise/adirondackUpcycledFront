import React, {useState} from 'react'
import {TiThMenu} from 'react-icons/ti'
import {VscChromeClose} from 'react-icons/vsc'
import '../css/NavBar.css'

function NavBar(visibility, products) {

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
                    <a href='/'>
                        HOME
                    </a>
                </li>

                <li className='nav-item'>
                    <a href='/about'>
                        ABOUT
                    </a>
                </li>

                <li className='nav-item'>
                    <a href='/events'>
                        EVENTS
                    </a>
                </li>

                <li className='nav-item'>
                    <a href='/custom'>
                        CUSTOM ORDERS
                    </a>
                </li>

                <li className='nav-item'>
                    <a href='/shop'>
                        SHOP
                    </a>
                </li>
            </ul>

            <div className='hamburger' onClick={handleClick}>
                    {click ? <VscChromeClose /> : <TiThMenu />} 
            </div>
        </nav>    
    </div>
  )
}

export default NavBar