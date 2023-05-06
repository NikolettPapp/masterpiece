import React from 'react';
import Table from 'react-bootstrap/Table';
import './css/Dump.css';

const Dump = (dumpWarehouse) => {

  let dumpWarehouseItems = [];
  
  console.log("Dumps");
  console.log(dumpWarehouseItems);
  for(let item of dumpWarehouse.dumpWarehouse){
    dumpWarehouseItems.push(item);
  }

  return (
    <div className='container dump-div'>
      <h1>Dump of complex devices</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
          {dumpWarehouseItems.map(function(item, i){
            return <tr key={i}>
              <td>{i}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
        })}
      </tbody>
    </Table>
    </div>
  )
}

export default Dump