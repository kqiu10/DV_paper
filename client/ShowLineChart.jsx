import React from "react";
import { Line } from "react-chartjs-2";



class ShowChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let labels = ["1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM","12PM"]
    let data = [1.5,1,0.8,0.3,0.2,0.5,5.5,7,2.6,2.3,2,1.5,2,2.5,3,2.8,2.6,2,1,1.5,1,1.3,1.5,2.3,2]
    var state = {
      labels: labels,
      datasets: [
        {
          label: "average number of Tickets taken",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(243, 156, 18,1)",
          borderWidth: 2,
          data: data,
          radius: 3
        }
      ]
    }
    return (
      <div >
        <Line height="700px"
          data={state}
          options={{
            title: {
              display: true,
              text: "Average number of parking tickets per hour",
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
            pointRadius:0
          }}
        />
      </div>
    );
  }
}

export default ShowChart;
