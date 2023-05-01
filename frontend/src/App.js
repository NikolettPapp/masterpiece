import React, {useState, useEffect} from 'react';
import './App.css';
import MainTitle from './components/MainTitle';
import Navbar from './components/Navbar';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dump from './pages/Dump'; /* (Kun) Dump storage - átmeneti raktár */
import About from './pages/About'; /* (Kun) A cégről - névjegy */

import Home from './pages/Home';

import DeviceCard from '../src/components/DeviceCard';

/* A Routing System kezelésére */
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


  return(
    <BrowserRouter>
      <div className='container'>
        <div className='row'>
          <MainTitle />
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={< Home />} /> 
        <Route path="/about" element={< About />} />
        <Route path="/dump" element={< Dump />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;