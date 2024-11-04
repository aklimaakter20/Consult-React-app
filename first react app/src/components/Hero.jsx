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
            <button>Get Quote</button>
            <button>Contact Us</button>

            <section>
                <div className="container">
                    <div className="consult">
                        <div>
                            <h2>Welcome to <span>CONSULT</span>
                            <h5>Oh God, let it be God's pain. Clita was himself, and the lorem was still in great pain
                            </h5>
                            <p>And the rebum himself, the nonumy rebum, justifies them. Accusa nonumy lorem kasd eirmod. Just because they are jealous of those who hate them, the vine of sadism will be established. Amet diam amet amet saint saint they envy was very much.

</p>
                            </h2>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </section>
            
            </div>
        </div>
    </div>
   </section>
  )
}

export default Hero
