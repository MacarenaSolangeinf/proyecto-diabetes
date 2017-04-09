import React, { Component } from 'react';
import {Row,Table,Button} from 'react-materialize';

class Historial extends Component {
  render() {
    return (
     <Row>
     <Table bordered={true} responsive={true} centered={true}>
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
             
            <td><Button waves='light' className="red" >Eliminar Medición</Button></td>
            </tr>
      </tbody>
      </Table>    
            
    </Row>   
    );
  }
}

export default Historial;