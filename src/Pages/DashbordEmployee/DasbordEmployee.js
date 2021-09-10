import React, { useContext,  } from "react";
import "./DasbordEmployee.css";
import { DashboardContext } from "../../Context/DashboardContext"; 
import DoughnutChart from "../../Components/AllCharts/DoughnutChart";


export default function DashboardEmployees() {
  const { dataChart, changeYear, yearData } = useContext(DashboardContext);

  return (
    <div className="global-container">
      <h1>Les résultats de l'année : {yearData}</h1>

      <form>
        <label htmlFor="year">Choisissez une date</label>
        <select onChange={changeYear} id="year">
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


        <h2>Les secteurs qui ont recruté :</h2>
        <DoughnutChart
          labels={["Marketing", "Securité", "Front-End"]}
          data={dataChart.chart5}
        />
        <h2>L'âge des nouveaux employés :</h2>
        <DoughnutChart
          labels={["< 20", "> 20 && < 30", "> 30 && < 60"]}
          data={dataChart.chart6}
        />
        <h2>Le niveau d'études :</h2>
        <DoughnutChart
          labels={["Bac", "> Bac + 2", "> Bac + 5"]}
          data={dataChart.chart7}
        />
        <h2>La nationalité :</h2>
        <DoughnutChart labels={["USA", "Germany", "UK"]}  data={dataChart.chart8} />
   
    </div>
  );
}
