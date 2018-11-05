import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import "./App.css";
import MyComponent from "./MyComponent.jsx";

charts(FusionCharts);
class App extends Component {
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
        data: []
      },
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    var that = this;
    fetch("http://localhost:8080/collegeplayer")
      .then(res => res.json())
      .then(result => {
        var i = result.length,
          n = 0;
        console.log(result);
        var arrData = [];
        for (var i = 0; i < result.length; i++) {
          arrData.push({ label: result[i].collegeID, value: result[i].year });
        }
        that.setState({ data: arrData });
      });
  }

  render() {
    return (
      <div>
        <MyComponent />
        <p>FusionChart corresponding to this data--</p>
        <ReactFusioncharts
          type="column2d"
          width="1000"
          height="300"
          dataFormat="JSON"
          dataSource={this.state}
        />
      </div>
    );
  }
}

export default App;
