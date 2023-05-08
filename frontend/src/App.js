import React from 'react';
import './App.css';
import MainTitle from './components/MainTitle';
import Footer from './components/Footer';
import Navigationbar from './components/Navigationbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dump from './pages/Dump'; /* (Kun) Dump storage - átmeneti raktár */
import About from './pages/About'; /* (Kun) A cégről - névjegy */
import Products from './pages/Products'; /* (Kun) Egy termékcsoport */
import Groups from './pages/Groups';

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
    }
  }



  setDevices(devices){
    this.state.devices = devices;
  }

  setdumpWarehouse(addedDevice){
    console.log("Added device:"+addedDevice);
    this.state.dumpWarehouse.push(addedDevice);
    console.log(this.state.dumpWarehouse);
  }

  componentDidMount(){
     /* (Kun) Az eszközök tömbje */


    /* Az elemeket kijelölés után át tudjuk adni az átmeneti raktárba */
    /* Az alapértelmezett állapota az, hogy üres */

  
    /* A gomb lenyomásakor lefutó függvény */
    /* Megkapja, hogy mire kattintottunk  */
    const addBtnClicked = (addedDevice) => {
      this.setdumpWarehouse(addedDevice) /* hozzáadjuk a meglévőhöz  */
      
      /* Az előbbi sor egyenértékü azzal, hogy: */
      /*
      let newWarehouse = dumpWarehouse
      newWarehouse.push(addedDevice)
      dumpWarehouse(newWarehouse)
      */
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
      this.setDevices({devices: apiDevices});
    
    });
  }

  render(){

  return(
    <BrowserRouter>
      <Container class="main-container">
        <Row>
          <MainTitle />
          <Navigationbar dumpWarehouse={this.state.dumpWarehouse} />
          
        </Row>
      </Container>

      <Routes>
        <Route path="/" element={< Home devices={this.state.devices} />} />
        <Route path="/about" element={< About />} />
        <Route path="/dump" element={< Dump dumpWarehouse = {this.state.dumpWarehouse} />} />
        <Route path="/products" element={< Products devices={this.state.devices}/>} />
        <Route path="/groups" element={< Groups devices={this.state.devices}/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
  }
}

export default App;