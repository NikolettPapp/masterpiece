import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
// eslint-disable-next-line
import MainTitle from '../components/MainTitle';
import Item from '../components/Item';

import './css/Groups.css'
import GroupCard from '../components/GroupCard';

 export default class Group extends React.Component {


  constructor(props) {
    super();
    this.state = {
        data: []
    }
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount(){
    this.fetchData();
  }

  RemoveEachRow = (index) => {
    console.log("-----", index);
    this.setState({
      data: this.state.data.filter((obj, idx) => idx !== index)
    });
  };

  fetchData()
  {
    fetch('http://127.0.0.1:8000/groups/')
    .then(response=>response.json())
    .then((data) => {
      console.log("Fetch data")
      console.log(data.devices);

      if(data!=undefined)
        this.setState({
          data:data
        });
      else 
      this.setState({
        data:[]
      })
    });
};

  render() {
    let filteredData = this.state.data;

    if (this.state.labelFilter) {
      filteredData = this.state.data.filter(
        (dt) => dt.ean === this.state.labelFilter
      );
    }

    if (this.state.textFilter) {
      filteredData = this.state.data.filter(
        (dt) => dt.item === this.state.textFilter
      );
    }

    return (
      <div className="container">
        <div className="row">
                  Csoport Id
                  <br />
                  <input
                    type="text"
                    value={this.state.labelFilter}
                    onChange={(e) =>
                      this.setState({ labelFilter: e.target.value })
                    }
                  />
                  </div>
              {filteredData.map((entry, index) => (
                <
                 GroupCard
                  ean = { entry.ean} 
                  name = { entry.name} 
                  parts = {entry.parts} 
                  price = {entry.price } 
                  image = {entry.image}
                />
              ))}
      </div>
    );
  }
}