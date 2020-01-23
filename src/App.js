import React from 'react';
import ReactApexChart from 'react-apexcharts';

import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'series1',
        data: Array.from({length: 8}, () => Math.floor(Math.random() * 40))
      }],
      options: {
        chart: {
          fontFamily: 'Helvetica, Arial, sans-serif',
          height: 350,
          type: 'area',
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: [
            "2020-01-19T00:00:00.000Z",
            "2020-01-19T01:30:00.000Z",
            "2020-01-19T02:30:00.000Z",
            "2020-01-19T03:30:00.000Z",
            "2020-01-19T04:30:00.000Z",
            "2020-01-19T05:30:00.000Z",
            "2020-01-19T06:30:00.000Z"
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
    };
  }

  

  componentDidMount() {


    
    window.setInterval(() => {

    
    
          const data =  Array.from({length: 8}, () => Math.floor(Math.random() * 40))
          console.log(data);
          
   
       
      
        
      
    }, 5000)
  }
      

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={650} width={1050} />


        </header>
      </div>
    );
  }

}

export default App;
