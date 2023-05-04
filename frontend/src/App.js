import React, {useState, useEffect} from 'react';
import './App.css';
import MainTitle from './components/MainTitle';
import Navbar from './components/Navbar';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dump from './pages/Dump'; /* (Kun) Dump storage - átmeneti raktár */
import About from './pages/About'; /* (Kun) A cégről - névjegy */
import Products from './pages/Products'; /* (Kun) Egy termékcsoport */

import Home from './pages/Home';

import DeviceCard from '../src/components/DeviceCard';

/* A Routing System kezelésére */
function App() {
  const [devices, setDevices] = useState([]) /* (Kun) Az eszközök tömbje */


  /* Az elemeket kijelölés után át tudjuk adni az átmeneti raktárba */
  /* Az alapértelmezett állapota az, hogy üres */
  const [dumpWarehouse, setdumpWarehouse] = useState([])

  /* A gomb lenyomásakor lefutó függvény */
  /* Megkapja, hogy mire kattintottunk  */
  const addBtnClicked = (addedDevice) => {
    setdumpWarehouse([ ...dumpWarehouse, addedDevice]) /* hozzáadjuk a meglévőhöz  */
    
    /* Az előbbi sor egyenértékü azzal, hogy: */
    /*
    let newWarehouse = dumpWarehouse
    newWarehouse.push(addedDevice)
    dumpWarehouse(newWarehouse)
    */

    console.log(dumpWarehouse) /* ez csak naplózás  */

  }

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
        addBtnClicked = {addBtnClicked}
        />
        )
      } /* for */

      setDevices(apiDevices)
    })
  }, [addBtnClicked])


  return(
    <BrowserRouter>
      <div className='container'>
        <div className='row'>
          <MainTitle />
          <Navbar dumpWarehouse={dumpWarehouse} />
        </div>
      </div>

      <Routes>
        <Route path="/" element={< Home devices={devices} />} />
        <Route path="/about" element={< About />} />
        <Route path="/dump" element={< Dump dumpWarehouse = {dumpWarehouse} />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;