import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import {Row,Tabs,Tab,Pagination,Input,option,Button,Table,thead,tbody} from 'react-materialize';

class Medicion extends Component {
  render() {
    return (
  <Row>
     
<Tabs className='tab-demo z-depth-1'>
    <Tab title="Medicion" active> 
     Registra tu Mediciòn
     <br/>
   <Input type="Mediciòn" label="Medicion" s={1} /> 
   <br/>
   <br/>
   <br/>
    <Input s={5} type='select' label="Descripcion" defaultValue='2'>
    <option value='1'>Antes del desayuno.</option>
    <option value='2'>Después del desayuno.</option>
    <option value='3'>Antes del almuerzo..</option>
    <option value='4'>Después del almuerzo.</option>
    <option value='5'>Antes de la merienda.</option>
    <option value='6'>Después de la merienda.</option>
    <option value='9'>General.</option>
    <option value='7'>Antes de cenar.</option>
    <option value='8'>Después de cenar.</option>  
    </Input>
    <br/>
    <br/>
    <br/>
    <br/>
    <Input type="Insulina" label="Insulina" s={1} /> 
    <br/>
    <br/>
    <br/>
    <br/>
   <Input type="Medicación" label="Medicación" s={1} /> 
  <br/>
    <br/>
    <br/>
    <br/>
   
   <Button waves='light' >Registrar Medicion</Button>
 </Tab>
    <Tab title="Historial" >
         <Table>
  <thead>
    <tr>
      <th data-field="fh">Fecha y hora</th>
      <th data-field="Medicion">Medición</th>
      <th data-field="Descripcion">Descripción</th>
      <th data-field="Insulina">Insulina</th>
      <th data-field="Medicación">Medicación</th>
      <th data-field="Accion">Acción</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>06-05-17</td>
      <td>123</td>
      <td>Después de la merienda.</td>
      <td>No</td>
      <td>Si</td>
      <td><Button floating large className='red' waves='light' icon='clear' /></td>
      </tr>
</tbody>
</Table>
</Tab>
</Tabs>
<br/>
<br/>
<br/>
<Pagination items={4} activePage={2} maxButtons={8} />
  </Row>   
    );
  }
}

export default Medicion;