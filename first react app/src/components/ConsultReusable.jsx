import React from 'react'

function ConsultReusable(props) {
  return (
    <div>
        <div className="info">
            <img src={props.image} alt="" />
            <div>
            <h3>{props.heading}</h3>
            <p>{props.description}</p>
            </div>
            
        </div>
    </div>
  )
}

export default ConsultReusable
