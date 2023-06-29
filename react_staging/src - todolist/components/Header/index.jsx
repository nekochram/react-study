import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
    static propTypes={
        addTodo:PropTypes.func.isRequired
    }
    handleKeyUp=(event)=>{
       const {addTodo}=this.props
       const {target,keyCode}=event
        if(keyCode!==13)return
        if(target.value.trim()===''){
            alert('输入不得为空')
            return
        }
        let todoObj={id:nanoid(),name:target.value,done:false}
        addTodo(todoObj)
        target.value=''
    }
  render() {
    return (
      <div className='input-container'>
        <input type="text" className='header-input' onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }
}
