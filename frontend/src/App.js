import React, { Component } from 'react';
import Medicion from './Medicion/js/Medicion.js'
import Historial from './Historial/js/Historial.js'
import { Tabs, Tab } from 'material-ui/Tabs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('/data')
      .then(res => res.json())
      .then(data => this.setState({ data: data }));
  }

  render() {
    return (
      <Tabs className='tab-demo z-depth-1'>
        <Tab label="Medición" >
          <Medicion />
        </Tab>
        <Tab label="Historial" >
          <Historial data={this.state.data} />
        </Tab>
      </Tabs>
    );
  }
}

export default App;