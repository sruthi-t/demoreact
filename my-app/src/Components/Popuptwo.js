import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Container,Row,Dropdown,Table,DropdownButton,Select} from 'react-bootstrap'
import React , { useState } from 'react'
import Data from "../Components/data.json"
import { Col } from 'react-bootstrap';

function Popuptwo(props) {
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
    
    <Button className='popuptwo ' onClick={handleShow}>
     NEXT
    </Button>
    

    <Modal className='popone' show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>CREATE INVOICE</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Row>
      <Table responsive>
      <thead>
        <tr>
                    <th>SERVICE TYPE</th>
                    <th>QUANTITY</th>
                    <th>RATE/QUANTITY</th>
                    <th>TOTAL AMOUNT</th>
                    <th>TAXABLE AMOUT</th>
                    
                   
      </tr>
      </thead>
      <tbody>
      {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.invoiceId}</td>
                        <td>{item.invoiceType}</td>
                        <td>{item.month}</td>
                        <td>{item.Year}</td>
                        <td>{item.date}</td>
                       
                    </tr>
                ))}
      </tbody>
    </Table>
      </Row>
      <Row>
          <Col className='popsecondnext'>
      <Popuptwo />
      </Col>
      </Row>
     
      </Modal.Body>
    
    </Modal>
  </>
  );
}

export default Popuptwo