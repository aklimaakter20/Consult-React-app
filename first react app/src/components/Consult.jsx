import React from 'react'
import './Consult.css'
import user from '../assets/user.png'
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
                                <div>
                                <img src={user} alt="" />
                                    </div>
                                <div className="info">
                                    <h3>Business Planning
                                    </h3>
                                    <p>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Consult
