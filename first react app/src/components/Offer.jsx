import React from 'react'
import './Offer.css'
import './OfferReusable'
import OfferReusable from './OfferReusable'
import user from '../assets/user.png'
import round from '../assets/round.png'
import stats from '../assets/stats.png'
import image from '../assets/image.png'
import cooperation from '../assets/cooperation.png'
import heart from '../assets/heart.png'




function Offer() {
  return (
    <div>
      <div className="container offer">
        
        <h1>What We Offer</h1>
        <div className="offer-section">
            <div className="offer-single">
            <OfferReusable image = {user} heading = "Business Research" desc = "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem"/>
            </div>
         
             <div className="offer-single">
            <OfferReusable image = {round} heading = "Business Research" desc = "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem"/>
            </div>
            <div className="offer-single">
            <OfferReusable image = {stats} heading = "Business Research" desc = "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem"/>
            </div>
            </div>
            <div className="offer-section">
            <div className="offer-single">
            <OfferReusable image = {image} heading = "Business Research" desc = "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem"/>
            </div>
            <div className="offer-single">
            <OfferReusable image = {cooperation} heading = "Business Research" desc = "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem"/>
            </div>
            <div className="offer-single">
            <OfferReusable image = {heart} heading = "Business Research" desc = "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem"/>
            </div>
            </div>
        
     
        
      </div>
    </div>
  )
}

export default Offer
