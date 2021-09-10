import React from 'react'
import { Line } from 'react-chartjs-2'; 




export default function LineChart(props) {
    
    

const data = {
  labels: [props.data[0],
  props.data[1],
  props.data[2],
  props.data[3],
  props.data[4],
  props.data[5],
],
  datasets: [
    {
      label: props.name,
      data: props.data,
      fill: true,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true, 
          min: 0,
          max: 20,
        },
      },
    ],
  },  plugins: { legend: 
    { display:true,
    labels:{
        boxWidth:0,
    }
}
}
};
    
    
    
    return (
        <>
        <div className='header'>
          <h1 className='title'> </h1>
          <div className='links'>
          </div>
        </div>
        <Line data={data} options={options} />
      </>
    )
}
