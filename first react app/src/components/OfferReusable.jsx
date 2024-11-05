import React from 'react'

function OfferReusable(props) {
  return (
    <div>
      <div className="reusable-content">
        <img src={props.image} alt="" />
        <h2>{props.heading}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default OfferReusable
