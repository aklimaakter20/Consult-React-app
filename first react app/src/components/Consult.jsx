import React from 'react'
import './Consult.css'
import user from '../assets/user.png'
import conicon from '../assets/conicon.png'
import settings from '../assets/settings.png'
import ConsultReusable from './ConsultReusable'
function Consult() {
  return (
    <div>
          <section>
                <div className="container">
                    <div className="consult-section">
                        <div className='consult-left'>
                            <h2>Welcome to <span>CONSULT</span> </h2>
                            <h5>Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo  lorem sit 
                            </h5>
                            <p>Et stet ipsum nonumy rebum eos justo, accusam invidunt aliquyam stet magna at et sanctus, vero sea sit amet dolores, sit dolor duo invidunt dolor, kasd rebum consetetur diam invidunt erat stet. Accusam nonumy lorem kasd eirmod. Justo clita sadipscing ea invidunt rebum sadipscing consetetur. Amet diam amet amet sanctus sanctus invidunt erat ipsum eirmod.</p>
                            <button className='btn'>Get Quote</button>
                           
                        </div>
                        <div className='consult-right'>
                            <div className="consult-info">
                               
                    
                                    <ConsultReusable image={user}  heading = "Business Planning" description = "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo"/>
                                    <ConsultReusable image={conicon} heading = "Financial Analysis" description = "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo"/>
                                    <ConsultReusable image = {settings} heading = "legal Advisory" description = "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Consult
