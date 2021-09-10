import React from 'react';
import './App.css';
import DasbordEmployee from './Pages/DashbordEmployee/DasbordEmployee';
import DasbordFinance from './Pages/Dashbordfinance/DasbordFinance';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar';
import { DashboardContextProvider } from './Context/DashboardContext';







export default function App() {
  return (
    <>
    <DashboardContextProvider>
    <Router>
<Sidebar/>

<Routes>

<Route exact path="/">
<DasbordFinance/>
</Route>
<Route path="/dashbordEmployees">
  <DasbordEmployee/>
</Route>
 
</Routes>




    </Router> 
    </DashboardContextProvider>
    </>
  );
}

