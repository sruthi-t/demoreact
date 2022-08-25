import React, { useState } from 'react'
import {Container,Row,Col,Button,Dropdown,Table,DropdownButton,Select} from 'react-bootstrap'
import { FaHome,FaArrowLeft,FaFilePdf } from 'react-icons/fa';
import '../App.css'
import Data from "../Components/data.json"
import Popupone from '../Components/Popupone'

function Home() {
  
  const [modalShow, setModalShow] = React.useState(false);
  const [data,setData]=useState(Data)
  let [savedata, setSavedata] = useState(" ") ;
  
  console.log(data)
 
  let handleDataChange = (e) => {
    e.preventDefault(); console.log(savedata)
    setSavedata(e.target.value)
   
  }
  return (
    <div>
    <Container>
     
    <Row>
      <Col   md={5}>
          <div className='logo d-flex'>
          <FaArrowLeft className='farrow'/>
          <FaHome className='homelogo'/>
          <h1>Driver <br/>Logistics</h1>
          </div>
      </Col>
      <Col className='drop'>
      <div className='dropselect' variant="primary">
      <select onChange={handleDataChange}> 
      <option value="Customer">Customer</option>  
      {data.map((savedata) =>(
      <option value={savedata.value}>{savedata.Customer}</option>))}
      </select>
      </div>
      </Col>
      <Col className='drop'>
      <div className='dropselect' variant="primary">
      <select onChange={handleDataChange}> 
      <option value="⬇️ Location ⬇️">Location</option>  
      {Data.map((item) => <option value={item.value}>{item.Location}</option>)}
      </select>
      </div>
      </Col >
      <Col className='drop'>
      <div className='dropselect' variant="primary">
      <select onChange={handleDataChange}> 
      <option value="⬇️ Year ⬇️">Year</option>  
      {Data.map((item) => <option value={item.value}>{item.Year}</option>)}
      </select>
      </div>
      </Col>
      <Col className='drop'>
      <div className='dropselect' variant="primary">
      <select onChange={handleDataChange}> 
      <option value="⬇️ Month ⬇️">Month</option>  
      {Data.map((item) => <option value={item.value}>{item.month}</option>)}
      </select>
      </div>
      </Col>
    
      <Col className='drop'>
        
          <Popupone />
        </Col> 
   
    </Row>
    <Row>
        <div className='download'>
        <FaFilePdf /> Invoice
        </div>
    </Row>

    <Row>
    <Col>
    <div className='tableclass'>

    <Table responsive>
      <thead>
        <tr>
                    <th>INVOICE ID</th>
                    <th>INVOICE TYPE</th>
                    <th>MONTH</th>
                    <th>YEAR</th>
                    <th>INVOICE AMOUNT</th>
                    <th>VIEW ANNEXURE</th>
                    <th>VIEW INVOICE</th>
                    <th>STATUS ADDED ON</th>
                   
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
                        <td>{item.invoiceAmount}</td>
                        <td>{item.viewAnnexure}</td>
                        <td>{item.viewInvoice}</td>
                        <td>{item.statusAddedon}</td>
                    </tr>
                ))}
      </tbody>
    </Table>
    </div>
      </Col>
    </Row>
  </Container>
  </div>
  )
}

export default Home