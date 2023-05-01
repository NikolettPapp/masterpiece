import React from 'react'
import '../../src/components/css/DeviceCard.css'

const DeviceCard = (props) => {
  return (
    <div className='col-sm-6 col-md-4 col-lg-4 device-card' >
        <img className='img-thumbnail w-100' src={props.image} alt = {props.name + " kep"} />
        <h3>{props.name}</h3>
        <p>{props.parts}</p>
        <h4>{props.price}</h4>
        <button>Transport</button>
    </div>
  )
}

export default DeviceCard
