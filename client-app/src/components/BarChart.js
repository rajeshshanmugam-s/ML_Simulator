import React from 'react';
import {Bar} from 'react-chartjs-2';

function BarChart({ data }) {
  const Mockdata = {
    labels: Object.entries(data) ,
    datasets: [
      {
        label: 'Bagging Classification',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: Object.values(data)
      }
    ]
  };

  // var chartOptions = {
  //   showScale: true,
  //   pointDot: true,
  //   showLines: false,

  //   title: {
  //       display: true,
  //       text: 'Chart.js Bar Chart'
  //   },

  //   legend: {
  //       display: true,
  //       labels: {
  //           boxWidth: 50,
  //           fontSize: 10,
  //           fontColor: '#bbb',
  //           padding: 5,
  //       }
  //   },

  //   scales: {
  //     yAxes: [{
  //         ticks: {
  //             beginAtZero:true,
  //             min: 0,
  //             max: 100    
  //         }
  //       }]
  //    }
  // }

  return (
    <Bar
      data={Mockdata}
      // width={100}
      // height={50}
      options={{
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true,
              min: 0
            }
          }]
        }
      }}
    />
  )
}

export default BarChart;