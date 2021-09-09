import React, { useContext, useState } from "react";
import BarChart from "../../Components/AllCharts/BarChart";
import VerticalBar  from "../../Components/AllCharts/BarChart";
import PieChart from "../../Components/AllCharts/PieChart";
import "./DasbordFinance.css";
import { DashboardContext } from '../../Context/DashboardContext';
import DoughnutChart from "../../Components/AllCharts/DoughnutChart";


export default function DasbordFinance() {
  
  const {dataChart,changeYear, yearData} = useContext
  (DashboardContext)
     
  console.log(dataChart,changeYear, yearData); 
  
  return (
    <div className="global-container">
      <h1> Les Resulstats de l'année : {yearData} </h1>
      <form>
        <label htmlFor="year"> Choisisez la date</label>
        <select onChange={changeYear}>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </form>
<div className="dashboard-conatiner">

<BarChart  data={dataChart.chart1} name={"Chiffres Bimestiels"}/>
<BarChart  data={dataChart.chart4} name={"Capital Marketing"}/>



</div>

    </div>
  );
}
