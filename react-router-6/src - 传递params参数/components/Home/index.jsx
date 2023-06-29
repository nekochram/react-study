import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
export default function Home() {
  return (
    <div>
        <p>Home</p>
        <ul className="nav nav-tabs">
                <li>
                <NavLink className="list-group-item" to="news">News</NavLink>
                </li>
                <li>
                <NavLink className="list-group-item" to="message">Message</NavLink>
                </li>
            </ul>
            <Outlet/>
    </div>
  )
}
