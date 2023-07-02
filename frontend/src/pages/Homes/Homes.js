import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Additional from '../../components/Additional/Additional'
import "./home.css"
import { Link } from 'react-router-dom'



function Packages() {
  const [services, setServices] = useState([])
  useEffect(()=>{
    async function getServices(){
        const serviceData = await axios.get('http://localhost:3000/services')
        setServices(serviceData.data)
    } 
    getServices()
    
},[])
  return (
    <div className='first-container'>
    <div className='pg1'>
    <header className='header'>
        <h1 className='header-1'>Bringing Life 2 Ur Cars</h1>
        <p className='header-p'>Newgenesisautospa is a premier detailing business in New York, NY. We specialize in interior and exterior auto detailing, paint correction, ceramic coatings, and more. Let us help you make your car look and feel like new!</p>
        <div className='img-containter'>
        <img src="../../../assets/img15.jpeg" alt="" width="95% "height="480" className='header-img'/>
        </div>
        <button className='homepage-booking-btn'>Book Us</button>
    </header>
    <article>
        <img src='../../../assets/img1.jpg'  className='article-img'/>
        <div className='article-div'>
        <p className='article-intro'>Luxury Detailing</p>
        <p className='article-p'> A company that started out with just two childhood friends have grown to now service thousands of customers throught the many neighborhhods of NYC & LongIsland. Providing top notch yet affordable detailing right to your front door. We believe that a clean & maintained vehicle is standard for a healthy lifestyle and mentality. Being mobile you dont have to wait when your schedule is right, we make multi-tasking 
        possible because your day doesnt have to stop. While enhancing your cars look using our above industry standard techniques helps keep your vehicles equity overtime.</p>
        </div>
    </article>
    </div>
    <div className="services">
    <h1 className='our-services'>Our Services</h1>
    <div className='services-container'>
    
        {services.map((service, i)=>{
            return(
                <figure className='figure-container'>
                    <div >
                        <img src={service.image} width = "250" height = "300"/>
                    </div>
                    <figcaption key={i} className='populated-services'>

    
                        <h3 className='name'>{service.name}</h3>
                        <h3 className='description'>{service.description}</h3>
                    </figcaption>
                    <Link to="/packages"><button>VIEW PACKAGES</button></Link>
                </figure>
            )
        
            
        })}
        </div>

        
        </div>
        </div>
  )
}

export default Packages