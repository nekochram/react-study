import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
    static propTypes={
        todos:PropTypes.array.isRequired,
        changeAllCheck:PropTypes.func.isRequired,
        delAlldoneTodo:PropTypes.func.isRequired,
    }
    handleChange(event){
        const {changeAllCheck}=this.props
        changeAllCheck(event.target.checked)
    }
    handleClick=()=>{
        const {delAlldoneTodo}=this.props
        delAlldoneTodo()
    }
  render() {
    const {todos}=this.props
    const haveDoneNum=todos.reduce((pre,current)=>{
        return pre + (current.done?1:0)
    },0)
    const todoNums=todos.length
    return (
      <div className='footer-container'>
        <input type="checkbox" disabled={todoNums===0} checked={(haveDoneNum===todoNums)&&(todoNums>0)} onChange={(event)=>this.handleChange(event)}/>
        <span>已完成{haveDoneNum}/全部{todoNums}</span>
        <button onClick={this.handleClick} className='del-done-btn' disabled={haveDoneNum===0}>清除已完成任务</button>
      </div>
    )
  }
}
