import React from 'react'
import "./packages.css"
import axios from 'axios'
import { useEffect, useState } from 'react'

function Packages() {
  const [packages, setPackages] = useState([])

  useEffect(()=>{
    async function getPackages(){
        const packagesData = await axios.get('http://localhost:3000/packages')
        setPackages(packagesData.data)
    } 
    getPackages()
    
},[])
  return (
    <div className='packages'>
              {packages.map((packages, i)=>{
            return(
                <figure className='figure-container'>
                    {/* <div >
                        <img src={packages.image} width = "250" height = "300"/>
                    </div> */}
                    <figcaption key={i} className='populated-packages'>

    
                        <h3 className='name'>{packages.name}</h3>
                        <h3 className='description'>{packages.description}</h3>
                    </figcaption>
                    {/* <Link to="/packages"><button>VIEW PACKAGES</button></Link> */}
                </figure>
            )
        
            
        })}
      </div>
  )
}

export default Packages