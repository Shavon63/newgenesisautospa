import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className='foot-container'>
        <h1 className='footer-header'>New Genesis Auto Spa</h1>
        <div>
            <ul className='footer-ul'>
                <li className='footer-items'>
                    <img/>
                    <h3 className='footer-h3'>917-361-1494</h3>
                </li>
                <li className='footer-items'>
                    <img/>
                    <h3 className='footer-h3'>@newgenesis_autospa</h3>
                </li>
                <li className='footer-items'>
                    <img/>
                    <h3 className='footer-h3'>Sun-Mon 8am-8pm</h3>
                </li>
                <li className='footer-items'>
                    <img/>
                    <h3 className='footer-h3'>NewgensisNYC@gmail.com</h3>
                </li>
                <li className='footer-items'>
                    <img/>
                    <h3 className='footer-h3'></h3>
                </li>
            </ul>
            <p>est @2019</p>
        </div>
    </div>
  )
}

export default Footer