import React, {useState, useEffect} from 'react';

// eslint-disable-next-line
import MainTitle from '../components/MainTitle';

import './css/Home.css'


const Home = (props) => {

  
    return (
      <div className="App">
        <div className='container'>
  
          <div className='row'>
            {props.devices}
          </div>
        </div>
      </div>
    );
  }

export default Home
