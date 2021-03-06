import React from 'react'
import { Doughnut } from 'react-chartjs-2';

export default function DoughnutChart(props) {
   
   
    const data = {
        labels:props.labels,
        datasets: [
          {
            label: '# of Votes',
            data: props.data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
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
        ],  plugins: { legend: 
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
    <Doughnut data={data} />
  </>
    )
}
