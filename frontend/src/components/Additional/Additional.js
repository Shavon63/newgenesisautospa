import React from 'react'
import "./additional.css"

function Additional() {
  return (
<div className='additional-services'>
    <h2 className='ad-serve-head'>ADITTIONAL SERVICES</h2>
    <ul className='ad-serve'>
        <li className='ad-info'>Ceramic Coating <span>$700-1400</span></li>
        <li className='ad-info'>Paint Correction/3-Stage<span>$400-700</span></li>
        <li className='ad-info'>Headlight Restoration<span>$125</span></li>
        <li className='ad-info'>Engine Detail<span>$$50</span></li>
        <li className='ad-info'>Ceramic Wax<span>$100</span></li>
        <li className='ad-info'>Clay-Bar<span>$100</span></li>

    </ul>
</div>
  )
}

export default Additional