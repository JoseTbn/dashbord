import React, { createContext,useState } from 'react'
import allData from './allData'


export const DashboardContext = createContext()

export const DashboardContextProvider = props => {

const [dataChart, setDataChart] =useState(allData['2020'])
const [yearData, setYearData] =useState('2020')

 const changeYear = el =>{
    setYearData(el.target.value)
     setDataChart(allData[el.target.value])

 }

 return (

<DashboardContext.Provider value={{changeYear,dataChart,yearData}}>
  {props.children}
</DashboardContext.Provider>

 )


}

