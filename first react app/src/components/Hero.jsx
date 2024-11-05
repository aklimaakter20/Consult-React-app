import React from 'react'
import './Hero.css'
import banner from '../assets/carousel-2.jpg'

const Hero = () => {
  return (
   <section>
    <div className="container">
        <div className="banner">
            <div className="layer"></div>
            <img src={banner} alt="" />
            <div className="hero-heading">
            <h5>Business Consultancy</h5>
            <h1>We Provide Solutions On <br /> Your Business</h1>
            <button className='btn'>Get Quote</button>
            <button className='btn btn2'>Contact Us</button>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Hero
