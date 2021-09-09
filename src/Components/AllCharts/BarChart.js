import React, { useContext } from 'react'
import {Bar} from 'react-chartjs-2'
import allData from '../../Context/allData';
import { DashboardContext } from '../../Context/DashboardContext';

export default function BarChart(props) {
   
  

   const data = {
    labels: ['Jan/Fev', 'Mar/Avr', 'Mai/Ju', 'Jui/Aou', 'Sept/Oct', 'Nov/Dec'],
    datasets: [
      {
        label: props.name, boxWidth:0,
        data: props.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.9)',
          'rgba(54, 162, 235, 0.9)',
          'rgba(255, 206, 86, 0.9)',
          'rgba(75, 192, 192, 0.9)',
          'rgba(153, 102, 255, 0.9)',
          'rgba(255, 159, 64, 0.9)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min:0,
            max:20
          },
        },
      ],
    },
    plugins: { legend: 
        { display:true,
        labels:{
            boxWidth:0,
        }
    }
  },
  };
   
   
   
    return (
        
         <>
      <div className='header'>
        <h1 className='title'>Graphique</h1>
        <div className='links'>
          
        </div>
      </div>
      <Bar  data={data} options={options} />
    </>
        
    )
}






  