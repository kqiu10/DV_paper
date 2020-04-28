import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';


class ShowChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let labels = ['January','February','March','April','May','June','July','August',"September","October","November","December"]
    let data = [146,207,142,124,118,107,125,210,120,100,117,88]
    var state = {
      labels: labels,
      datasets: [
        {
          label: "the number of parking tickets",
          fill: false,
          lineTension: 0.5,
          backgroundColor: [
            '#B21F00',
            '#C9DE00',
            '#2FDE00',
            '#00A6B4',
            '#6800B4',
            '#c0392b',
            "#bdc3c7",
            '#7f8c8d',
            "#312738",
            "#796c82",
            "#8f30d1",
            "#d90f6a"

          ],
          hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F',
            '#2c3e50',
            '#f1c40f',
            '#16a085',
            '#B21F00',
            '#C9DE00',
            '#2FDE00',
            '#00A6B4'
            ],
          borderWidth: 2,
          data: data,
          radius: 0
        }
      ]
    }
    return (
      <div >
        <div height="700rem" >
        <Pie height="700rem"
          data={state}
          options={{
            title: {
              display: true,
              text: "Average number of parking tickets per month on Manhattan 96th St in 2008",
              fontSize: 20
            },
            legend: {
              display: true,
              position: "right"
            },
            // Boolean - whether or not the chart should be responsive and resize when the browser does.

            responsive: true,

            // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container

            maintainAspectRatio: false,
          }}
          />
        </div>
        <div height ="700rem">
          <Doughnut height="700rem"
          data={state}
          options={{
            title:{
              display:true,
              text:'Average number of parking tickets per month on Manhattan 96th St in 2008',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
              // Boolean - whether or not the chart should be responsive and resize when the browser does.

              responsive: true,

              // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container

              maintainAspectRatio: false,
          }}
          />
          </div>
      </div>
    );
  }
}

export default ShowChart;
