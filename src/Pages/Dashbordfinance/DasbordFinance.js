import React, { useContext, useState } from "react";
import "./DasbordFinance.css";

export default function DasbordFinance() {
  return (
    <div className="global-container">
      <h1> Les Resulstats de l'année : 2020</h1>
      <form>
        <label htmlFor="year"> Choisisez la date</label>
        <select>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </form>
    </div>
  );
}
