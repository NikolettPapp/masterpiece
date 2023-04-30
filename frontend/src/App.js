import React, {useState, useEffect} from 'react';
import './App.css';
import MainTitle from './components/MainTitle';
import DeviceCard from './components/DeviceCard';

function App() {
  const [devices, setDevices] = useState([]) /* (Kun) Az eszközök tömbje */

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/devices/") /* egyébként .env file-ba írnánk, hogy könnyebb legyen kezelni */
    .then(res => res.json())
    .then(data => {
      let apiDevices = []

      /* (Kun) külső ciklus */
      for (let devI=0; devI < data.length; devI++) {
        let parts=""


        for(let partI = 0; partI < data[devI].parts.length; partI++){
          parts += data[devI].parts[partI].name + " , "
        }

        apiDevices.push(
        < 
        DeviceCard 
        name = { data[devI].name} 
        parts={parts} 
        price = {data[devI].price } 
        image = {"http://127.0.0.1:8000/media/" + data[devI].image } /* (Kun) .env javasolt*/
        />
          )
      } /* for */

      setDevices(apiDevices)
    })
  }, [])

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <MainTitle />
        </div>

        <div className='row'>
          {devices}
        </div>
      </div>
    </div>
  );
}

export default App;