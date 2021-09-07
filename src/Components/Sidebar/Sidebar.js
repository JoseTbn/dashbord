import React from 'react'
import icon from './analytics.svg'
import './Sidebar.css'
import { Link } from 'react-router-dom'


export default function Sidebar() {
    return (
        <nav className='sidenav'>
               
               <img src={icon} alt=""/>
               <Link to='/'>Finances</Link>
               <Link to="/dashbordEmployees">Emploi</Link>


        </nav>
    )
}
