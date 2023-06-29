import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    inputChange=id=>{
        return (event)=>{
            const {updateTodo}=this.props
            updateTodo(id,event.target.checked)
        }
    }
    handleCLick(id){
        const {deleteTodo}=this.props
        if(window.confirm('确认删除')){
            deleteTodo(id)
        }
    }
  render() {
    const {id,name,done}=this.props
    return (
      <div className='item-container'>
        <input type="checkbox" checked={done} onChange={this.inputChange(id)}/>
        <span>{name}</span>
        <button onClick={()=>{this.handleCLick(id)}} className='del-btn'>删除</button>
      </div>
    )
  }
}
 