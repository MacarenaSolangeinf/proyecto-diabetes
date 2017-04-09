import React, { Component } from 'react';
import {Row,Col,Input,option,Button} from 'react-materialize';

class Medicion extends Component {
  render() {
    return (
        <Row>
            <Col l={12} s={12}>
                <Col l={12 }s={9} offset="s3"> <h6>CONTROLA TU GLUCOSA</h6></Col>
                <Col l={12}s={9} offset="s3">
                    <Input  label="Medición" S={12}/> 
                </Col>
                <Col l={12} s={9} offset="s3">
                    <Input  type='select' label="Descripción" >
                        <option value='1'>Antes del desayuno.</option>
                        <option value='2'>Después del desayuno.</option>
                        <option value='3'>Antes del almuerzo.</option>
                        <option value='4'>Después del almuerzo.</option>
                        <option value='5'>Antes de la merienda.</option>
                        <option value='6'>Después de la merienda.</option>
                        <option value='9'>General.</option>
                        <option value='7'>Antes de cenar.</option>
                        <option value='8'>Después de cenar.</option>  
                    </Input>
                </Col> 
                <Col l={12} s={9} offset="s3">     
                    <Input  type='select' label="Medicación" >
                        <option value='1'>Ingerida.</option>
                        <option value='2'>No Ingerida.</option>
                        <option value='3'>No ingiere Medicación.</option>
                    </Input>
                </Col>
                <Col l={12} s={9} offset="s3">
                    <Input label="Insulina"  /> 
                </Col>
                <Col l={12} s={9} offset="s3">
                    <Button waves='light' >Registrar Medición</Button>
                </Col>
        </Col>
    </Row>   
    );
  }
}

export default Medicion;