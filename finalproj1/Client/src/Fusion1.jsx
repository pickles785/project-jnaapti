import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import "./App.css";
import "./MyComponent.jsx";
charts(FusionCharts);
class Fusion1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: {
        chart: {
          caption: "PLAYER playing At years",
          xaxisname: "PlayerName",
          yaxisname: "Year",
          theme: "fusion"
        },
        data: [
          {
            label: "hwewsfnujs",
            value: "10"
          }
        ]
      }
    };
  }
  render() {
    return (
      <div>
        <ReactFusioncharts
          type="column2d"
          width="1000"
          height="300"
          dataFormat="JSON"
          dataSource={this.state.dataSource}
        />
      </div>
    );
  }
}

export default Fusion1;
