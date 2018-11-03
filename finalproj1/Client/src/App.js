import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent.jsx';
import Fusion1 from './Fusion1.jsx';
charts(FusionCharts);
class App extends Component {
  render() {
    return (
      <div>
      <MyComponent/>
      <Fusion1/>
         </div>
    );
  }
}

export default App;