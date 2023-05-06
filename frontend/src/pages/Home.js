// eslint-disable-next-line
import React, {useState, useEffect} from 'react';
import './css/Home.css'

// eslint-disable-next-line
import MainTitle from '../components/MainTitle';

import './css/Home.css'

/* A beárkező props-okat szétszedi annak alkotóelemeire. Utána lehetne hivatkozni az elemeire. */
/* Azt hívjuk: dekonstruálásnak. */
const Home = ({devices}) => {
  
    return (
      <div className="App">
        <div className='container'>
  
          <div className='row'>
            {devices}
          </div>
        </div>
      </div>
    );
  }

export default Home
