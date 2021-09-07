import React from 'react';
import './App.css';
import DasbordEmployee from './Pages/DashbordEmployee/DasbordEmployee';
import DasbordFinance from './Pages/Dashbordfinance/DasbordFinance';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'

import Sidebar from './Components/Sidebar/Sidebar';
import { Switch } from 'react-router';







export default function App() {
  return (
    <>
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
    </>
  );
}

