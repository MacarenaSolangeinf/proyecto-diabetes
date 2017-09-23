import React, { Component } from 'react';
import { Row, Table, Button } from 'react-materialize';

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
              {this.props.data.map(dato =>
               <tr key={dato.id}>
                  <td>{dato.fecha}</td>
                  <td>{dato.medicion}</td>
                  <td>{dato.descripcion}</td>
                  <td>{dato.insulina}</td>
                  <td>{dato.medicacion}</td>
                  <td><Button waves='light' className="red" ><b>Eliminar Medición</b></Button></td>
                </tr>
              )}
          </tbody>
        </Table>

      </Row>
    );
  }
}

export default Historial;