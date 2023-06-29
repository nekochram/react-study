import React, { Component } from 'react'
import Message from './Message'
import News from './News'
import { NavLink,Route } from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home</h3>
        <div>
            <ul className="nav nav-tabs">
                <li>
                <NavLink className="list-group-item" to="/home/news">News</NavLink>
                </li>
                <li>
                <NavLink className="list-group-item" to="/home/message">Message</NavLink>
                </li>
            </ul>
            <Route path="/home/news" component={News}/>
            <Route path="/home/message" component={Message}/>
            </div>
      </div>
    )
  }
}
