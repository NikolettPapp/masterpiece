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
        data: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  /*componentDidMount(){
    this.fetchData();
  }*/

  RemoveEachRow = (index) => {
    console.log("-----", index);
    this.setState({
      data: this.state.data.filter((obj, idx) => idx !== index)
    });
  };

  handleClick(){
    if(this.state.labelFilter!='' && this.state.labelFilter!==null)
    fetch('http://127.0.0.1:8000/groups/'+this.state.labelFilter)
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

  /*fetchData()
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
 };*/

  /*render() {
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
    }*/
  render(){
    let groups = this.state.data;
    console.log("render")
    console.log(groups)

    return (
      <div className="container">
        <div className="row">
                  <h3>Csoport Id</h3>
                  <input
                    className='col-5 me-5'
                    type="text"
                    value={this.state.labelFilter}
                    onChange={(e) =>
                      this.setState({ labelFilter: e.target.value })
                    }
                  />
                  
                  <button className='col-6' onClick={this.handleClick}>Keresés</button>
                  </div>{groups!=null && groups.detail!='Nem található.' &&
                <
                  GroupCard
                  id = {groups.id} 
                  name = {groups.name} 
                  description = {groups.description} 
                  price = {groups.price} 
                  />
                  }
              
      </div>
    );
  }
}