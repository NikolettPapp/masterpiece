import React from 'react'
import '../../src/components/css/GroupCard.css'

const GroupCard = (props) => {
  return (
    <div className='col-sm-6 col-md-4 col-lg-4 device-card' >
    <h2> Id: {props.id}</h2>
    <h3> Csoport név: {props.name}</h3>
    <h3> Termék leírása: {props.description}</h3>
    </div>
  )
}

export default GroupCard