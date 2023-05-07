// eslint-disable-next-line
import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
// eslint-disable-next-line
import MainTitle from '../components/MainTitle';

import './css/Products.css'

/*class List extends React.Component{
  constructor(){
    super();
    this.state={
      data:[]
    };
  }


  

  componentDidMount(){
    this.fetchData();
  }

  render(){
    const empData=this.state.data;
    const rows=empData.map((emp)=>
    <tr key={emp.id}>
       <td>{emp.ean}</td>
       <td>{emp.name}</td>
       <td>{description}<td>
    <td>{emp.price}</td>
    <td>{emp.image}</td>
    </tr>
    );
    return(
      <table classname="table table-bordered">
      <thead>
      <tr>
      <th>EAN szám</th>
      <th>Név</th>
      <th>Leírás</th>
      <th>Ár</th>
      <th>Kép</th>
      </tr>
      </thead>
      <tbody>
      {rows}
      </tbody>
      </table>
    );

    }

    
  }
*/

 export default class Product extends React.Component {


  constructor(props) {
    super();
   /* console.log(props)
    this.state = { props, labelFilter: null, textFilter: null };*/
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
    fetch('http://127.0.0.1:8000/products')
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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>
                  EAN szám
                  <br />
                  <input
                    type="text"
                    value={this.state.labelFilter}
                    onChange={(e) =>
                      this.setState({ labelFilter: e.target.value })
                    }
                  />
                </th>
                <th>
                  Termék
                  <br />
                  <input
                    type="text"
                    value={this.state.textFilter}
                    onChange={(e) =>
                      this.setState({ textFilter: e.target.value })
                    }
                  />
                </th>
                <th>
                  Leírás
                  <br />
                  <input
                    type="text"
                    value={this.state.textFilter}
                    onChange={(e) =>
                      this.setState({ textFilter: e.target.value })
                    }
                  />
                </th>
                <th>
                  Ár
                  <br />
                  <input
                    type="text"
                    value={this.state.textFilter}
                    onChange={(e) =>
                      this.setState({ textFilter: e.target.value })
                    }
                  />
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((entry, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{entry.ean}</td>
                  <td>{entry.name}</td>
                  <td>{entry.description}</td>
                  <td>{entry.price}</td>
                  <td
                    style={{
                      backgroundColor: "#FFFF",
                      borderTopColor: "#FFFF"
                    }}
                    onClick={() => this.RemoveEachRow(index)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}