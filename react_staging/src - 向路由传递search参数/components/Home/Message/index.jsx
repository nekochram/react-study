import React, { Component } from 'react'
import Detail from './Detail'
import { NavLink,Route } from 'react-router-dom'
export default class Message extends Component {
    message=[
        {id:1,title:'贴吧'},
        {id:2,title:'美团'},
        {id:3,title:'微博'}
    ]
  render() {
    const message=this.message
    return (
        <div>
            <ul>
            {
                message.map(item=>{
                    return (
                        <li key={item.id}>
                            <NavLink to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</NavLink>
                        </li>
                    )
                })
            }
            </ul>
            <Route path="/home/message/detail" component={Detail}/>
        </div>
    )
  }
}
