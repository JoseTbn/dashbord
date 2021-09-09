import React, { useContext, useState } from "react";
import BarChart from "../../Components/AllCharts/BarChart";
import VerticalBar  from "../../Components/AllCharts/BarChart";
import "./DasbordFinance.css";
import { DashboardContext } from '../../Context/DashboardContext';
import LineChart from "../../Components/AllCharts/LineChart";


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
        <option selected={yearData === "2021" && "selected"} value="2021">
            2021
          </option>
          <option selected={yearData === "2020" && "selected"} value="2020">
            2020
          </option>
          <option selected={yearData === "2019" && "selected"} value="2019">
            2019
          </option>
          <option selected={yearData === "2018" && "selected"} value="2018">
            2018
          </option>
        </select>
      </form>
<div className="dashboard-conatiner">

<BarChart  data={dataChart.chart1} name={"Chiffres Bimestiels"}/>
<LineChart data={dataChart.chart2} name={"Nombre d'abonnés (en milliers)"}/>
<LineChart data={dataChart.chart3} name={"Nombre de clients (en milliers)"}/>
<BarChart  data={dataChart.chart4} name={"Capital Marketing"}/>


</div>

    </div>
  );
}
