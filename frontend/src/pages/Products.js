// eslint-disable-next-line
import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

// eslint-disable-next-line
import MainTitle from '../components/MainTitle';
import Item from '../components/Item';

import './css/Products.css'

 export default class Product extends React.Component {


  constructor(props) {
    super();
    this.state = {
        data: null
    }
    this.handleClick = this.handleClick.bind(this);
  }


  RemoveEachRow = (index) => {
    console.log("-----", index);
    this.setState({
      data: this.state.data.filter((obj, idx) => idx !== index)
    });
  };

  handleClick(){
    if(this.state.labelFilter!='' && this.state.labelFilter!==null)
    fetch('http://127.0.0.1:8000/products/'+this.state.labelFilter)
    .then(response=>response.json())
    .then((data) => {
      console.log("Fetch data")
      console.log(data);

      if(data!=undefined)
        this.setState({
          data:data
        });
      else 
      this.setState({
        data:[]
      })
    });
  }

  render() {
    let product = this.state.data;
    console.log("render")
    console.log(product)
    return (
      <div className="container">
        <div className="row">
                  <h3>EAN szám</h3>
                  <input className='col-6'
                    type="text"
                    value={this.state.labelFilter}
                    onChange={(e) =>
                      this.setState({ labelFilter: e.target.value })
                    }
                  />
                  <button className='col-6' onClick={this.handleClick}>Button</button>
                  </div>{product!=null && product.detail!='Nem található.' && 
                <
                        Item
                        ean = { product.ean} 
                        name = { product.name} 
                        parts = {product.parts} 
                        price = {product.price } 
                        image = {product.image}
                        />
                  }
                        
      </div>
    );
  }
} 