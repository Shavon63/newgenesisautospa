import React from 'react'
import "./home.css"
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [services, setServices] = useState([])

    useEffect(()=>{
        async function getServices(){
            const serviceData = await axios.get('http://localhost:3000/services')
            setServices(serviceData.data)
        } 
        getServices()
        
    },[])
  return (
    <div className='container'>
        <div className='pg1'>
        <header className='header'>
            <h1>Bringing Life 2 Ur Cars</h1>
            <p>Newgenesisautospa is a premier detailing business in New York, NY. We specialize in interior and exterior auto detailing, paint correction, ceramic coatings, and more. Let us help you make your car look and feel like new!</p>
            <div className='img-containter'>
            <img src="../../../assets/img15.jpeg" alt="" width="95% "height="480" className='header-img'/>
            </div>
            <button className='homepage-booking-btn'>Book Us</button>
        </header>
        <article>We operate at industry standard to please all of our customers. A company that started out with just two childhood friends have grown to now service thousands of customers throught the many neighborhhods of NYC & LongIsland providing top notch but affordable detailing right to your front door. We believe taht a clean & maintained vehicle is standard for a healthy lifestyle and mentality. Because we are mobile you dont have to wait for when your schedule is right because we make multi-tasking 
            possible because your day doesnt have to stop. Our services range from basic car washes to complete interior and exterior detailing. We use the latest products and techniques to ensure that every car is given the best care possible. We take great pride in our reputation and strive to give our customers the best service possible. We are customer-focused and put our customers first. Our team of highly trained and experienced technicians is always ready to provide the highest quality detailing services.
        </article>
        </div>
        <div className='services'>
        <h1>Our Services</h1>
        
        
            {services.map((service, i)=>{
                return(
                    <figure>
                        <div>
                            <img src={service.image} width = "300" height = "400"/>
                        </div>
                        <figcaption key={i} className='populated-services'>

        
                            <h3>{service.name}</h3>
                            <h3>{service.description}</h3>
            
                        </figcaption>
                    </figure>
                )
            
                
            })}
            </div>
        
        
    </div>
  )
}
            
