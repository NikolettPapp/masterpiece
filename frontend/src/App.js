import React, {useState, useEffect} from 'react';
import './App.css';
import MainTitle from './components/MainTitle';
import Navigationbar from './components/Navigationbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dump from './pages/Dump'; /* (Kun) Dump storage - átmeneti raktár */
import About from './pages/About'; /* (Kun) A cégről - névjegy */
import Products from './pages/Products'; /* (Kun) Egy termékcsoport */

import Home from './pages/Home';

import DeviceCard from '../src/components/DeviceCard';

/* A Routing System kezelésére */
class App extends React.Component  {

  constructor(){
    super();
    this.state={
      devices: [],
      setDevices: [],
      dumpWarehouse:[],
      setdumpWarehouse: []
    }
  }

  setDevices(devices){
    this.state.devices = devices;
    console.log(this.state.devices);
  }

  componentDidMount(){
     /* (Kun) Az eszközök tömbje */


    /* Az elemeket kijelölés után át tudjuk adni az átmeneti raktárba */
    /* Az alapértelmezett állapota az, hogy üres */

  
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
    
      this.setState({devices: apiDevices});
    
    });
  }

  render(){

  return(
    <BrowserRouter>
      <Container>
        <Row>
          <MainTitle />
          <Navigationbar dumpWarehouse={this.state.dumpWarehouse} />
        </Row>
      </Container>

      <Routes>
        <Route path="/" element={< Home devices={this.state.devices} />} />
        <Route path="/about" element={< About />} />
        <Route path="/dump" element={< Dump dumpWarehouse = {this.state.dumpWarehouse} />} />

      </Routes>
    </BrowserRouter>
  )
  }
}

export default App;