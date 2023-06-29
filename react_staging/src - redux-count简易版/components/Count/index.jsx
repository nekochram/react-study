import React, { Component } from 'react'
import store from '../../redux/store'
export default class Count extends Component {
    increase=()=>{
        const {value}=this.selectNumber
        store.dispatch({type:'increase',data:value})
    }
    decrease=()=>{
        const {value}=this.selectNumber
        store.dispatch({type:'decrease',data:value})
    }
    increaseWhenOdd=()=>{
        const {value}=this.selectNumber
        if(store.getState() % 2 ===1){
            store.dispatch({type:'increase',data:value})
        }
    }
    increaseAsync=()=>{
        const {value}=this.selectNumber
        setTimeout(()=>{
            store.dispatch({type:'increase',data:value})
        },500)
    }
  render() {
    return (
      <>
        <h1>当前Count的值：{store.getState()}</h1>
        <select ref={(current)=>this.selectNumber=current}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increase}>+</button>&nbsp;
        <button onClick={this.decrease}>-</button>&nbsp;
        <button onClick={this.increaseWhenOdd}>increaseWhenOdd</button>&nbsp;
        <button onClick={this.increaseAsync}>increaseAsync</button>
      </>
    )
  }
}
