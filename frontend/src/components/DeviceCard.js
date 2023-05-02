import React from 'react'
import '../../src/components/css/DeviceCard.css'

// Kattintásra meghívja a helyi, névnélküli függvényt.
// ..az meghívja a másik függvényt és betülti a két adatot  */
//             <button onClick={ () => {
//      props.addBtnClicked({"name": props.name, "price": props.price })
//    }}>Transport</button>
const DeviceCard = (props) => {
  return (
    <div className='col-sm-6 col-md-4 col-lg-4 device-card' >
        <img className='img-thumbnail w-100' src={props.image} alt = {props.name + " kep"} />
        <h3>{props.name}</h3>
        <p>{props.parts}</p>
        <h4>{props.price} .- Ft + Áfa</h4>
        <button onClick = { () => {
          props.addBtnClicked( { "name": props.name, "price": props.price })
        } }>Transport</button>
    </div>
  )
}

export default DeviceCard
