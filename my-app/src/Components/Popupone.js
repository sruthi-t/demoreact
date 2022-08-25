import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Container,Row,Dropdown,Table,DropdownButton,Select} from 'react-bootstrap'
import React , { useState } from 'react'
import Data from "../Components/data.json"
import { Col } from 'react-bootstrap';
import Popuptwo from './Popuptwo';

function Popupone(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data,setData]=useState(Data)
     let [savedata, setSavedata] = useState(" ") ;
  
     console.log(data)
 
     let handleDataChange = (e) => {
    e.preventDefault(); console.log(savedata)
    setSavedata(e.target.value)
   
  }
  return (
    <>
    <Button className='popupone' onClick={handleShow}>
      New Invoice
    </Button>

    <Modal className='popone' show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>CREATE INVOICE</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Row>
          <Col>
           <select onChange={handleDataChange}> 
      <option value="⬇️ Customer ⬇️"> Customer </option>
            {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
      {Data.map((item) => <option value={item.value}>{item.Customer}</option>)}
    </select>
    </Col>
    <Col>
           <select onChange={handleDataChange}> 
      <option value="⬇️ Location ⬇️"> Location </option>
            {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
      {Data.map((item) => <option value={item.value}>{item.Location}</option>)}
    </select>
    </Col>
    <Col>
           <select onChange={handleDataChange}> 
      <option value="⬇️ Month ⬇️"> Month </option>
            {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
      {Data.map((item) => <option value={item.value}>{item.month}</option>)}
    </select>
    </Col>
    <Col>
           <select onChange={handleDataChange}> 
      <option value="⬇️ Year ⬇️"> Year </option>
            {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
      {Data.map((item) => <option value={item.value}>{item.Year}</option>)}
    </select>
    </Col>
    
      </Row>
      <Row>
          <Col md={6} className="modalsubhead">
          <select onChange={handleDataChange}> 
      <option value="⬇️ Invoice Type ⬇️">Invoice Type</option>
            {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
      {Data.map((item) => <option value={item.value}>{item.Year}</option>)}
    </select>
          </Col>
          <Col md={6} className="modalsubhead">
          <select onChange={handleDataChange}> 
      <option value="⬇️ Select Bill Date ⬇️"> Select Bill Date </option>
            {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
      {Data.map((item) => <option value={item.value}>{item.Year}</option>)}
    </select>
          </Col>
          
      </Row>
      <Row>
      <Popuptwo/>
      </Row>
     
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  </>
  );
}

export default Popupone