import React from 'react'
import '../../src/components/css/Item.css'


const Item = (props) => {
  return (
    <div className='col-sm-6 col-md-4 col-lg-4 device-card' >
        <img className='img-thumbnail w-100' src={props.image} alt = {props.name + " kep"} />
        <h2> Ean azonosító: {props.ean}</h2>
        <h3>Név: {props.name}</h3>
        <h4>Ár: {props.price} .- Ft + Áfa</h4>
    </div>
  )
}


export default Item