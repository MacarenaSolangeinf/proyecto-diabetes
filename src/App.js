import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import {Row,Col,Icon,Input,option,Button} from 'react-materialize';

class App extends Component {
  render() {
    return (
  <Row>
    <Col s={4}>
           Registra tu Mediciòn
           <br/>
   <Input type="Mediciòn" label="Medicion" s={1} /> 
   <br/>
   <br/>
   <br/>
    <Input s={8} type='select' label="Descripcion" defaultValue='2'>
    <option value='1'>Antes del desayuno.</option>
    <option value='2'>Después del desayuno.</option>
    <option value='3'>Antes del almuerzo..</option>
    <option value='4'>Después del almuerzo.</option>
    <option value='5'>Antes de la merienda.</option>
    <option value='6'>Después de la merienda.</option>
    <option value='9'>Colación - Otro.</option>
    <option value='7'>Antes de cenar.</option>
    <option value='8'>Después de cenar.</option>
       
    </Input>
    <br/>
   <br/>
   <br/>
   <br/>
   <Button waves='light' >Registrar Medicion</Button>
   </Col>
  <Col s={4}>
  </Col>
  <Col s={4}>
  </Col>
  </Row>
 

      
    );
  }
}

export default App;
