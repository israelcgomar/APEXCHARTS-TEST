import React from 'react';
import { Line } from 'react-chartjs-2'
import 'chartjs-plugin-streaming'


import './App.css';

const data = {
  datasets: [
    {
      label: "MEMORIA RAM",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      lineTension: 0,
      borderDash: [6, 4],
      data: []
    }
  ]
};

const options = {
  scales: {
    xAxes: [
      {
        type: "realtime",
        realtime: {
          onRefresh: function() {
            data.datasets[0].data.push({
              x: Date.now(),
              y: Math.random() * 10
            });
          },
          delay: 3000
        }
      }
    ]
  }
};
class App extends React.Component {

  constructor(props) {
    super(props);

   

    this.state = {
 
      
    };
  }

  

  componentDidMount() {

  }
      

  render() {
    
   
    
    return (
      <div className="App">
        <header className="App-header">

        <Line 
          data={data} 
          options={options} 
          width={100}
          height={50}
        />


        </header>
      </div>
    );
  }

}

export default App;
