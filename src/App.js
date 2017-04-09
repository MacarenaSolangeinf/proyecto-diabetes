import React, { Component } from 'react';
import Medicion from './Medicion/js/Medicion.js'
import Historial from './Historial/js/Historial.js'
import {Row,Col,Tabs,Tab,Input,option,Button,Table,Pagination,thead,tbody} from 'react-materialize';

class App extends Component {
  render() {
    return (
  <Row>
    <Col l={12} s={12}>
      <Tabs className='tab-demo z-depth-1'>
          <Tab title="Medición" active> 
              <Medicion/>
          </Tab>
          <Tab title="Historial" >
              <Historial/>
          </Tab>
      </Tabs>
    </Col>
  </Row>   
    );
  }
}

export default App;