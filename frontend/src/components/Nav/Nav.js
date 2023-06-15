import React from 'react'
import { useEffect, useState } from 'react'
import {Reorder} from "@mui/icons-material"
import {Link, Navigate} from 'react-router-dom'
import './nav.css'
import * as Scroll from "react-scroll"

export default function Nav() {
  const [showNav, setShowNav] = useState(false)
  const toggleButton =()=>{
    setShowNav(!showNav)
  }

  useEffect(()=>{})
  return (
    <div className="navbar" id= {showNav? 'open' : 'close' }>
    <div className='toggleButton'>
        <button onClick={toggleButton}> 
            <Reorder/>
        </button>
    </div>
    <div className='links'>
      <ul className={showNav? 'nav-menu active' : "nav-menu"}>
        <li>
        <Link to="/" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
        </li>
        <li>
        <Link to="/packages" spy={true} smooth={true} offset={50} duration={500}>Packages</Link>
        </li>
        <li>
        <Link to="/services" spy={true} smooth={true} offset={50} duration={500}>Services</Link>
        </li>
        <li>
        <Link to="/contact"  spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
        </li>
        </ul>
    </div>
    </div>
  )
}

