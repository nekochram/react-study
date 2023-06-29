import React, { Component } from 'react'
import {connect} from 'react-redux'
import {creatIncreaseAction,creatDecreaseAction,creatIncreaseAsyncAction} from '../../redux/actions/count'
class Count extends Component {
    increase=()=>{
        const {value}=this.selectNumber
        this.props.jia(value)
    }
    decrease=()=>{
        const {value}=this.selectNumber
        this.props.jian(value)
    }
    increaseWhenOdd=()=>{
        const {value}=this.selectNumber
        if(this.props.count % 2 ===1){
            this.props.jia(value)
        }
    }
    increaseAsync=()=>{
        const {value}=this.selectNumber
        this.props.jiaAsync(value,500)
    }
  render() {
    return (
      <>
        <h1>当前Count的值：{this.props.count},下方组件的人数为{this.props.numOfRen}</h1>
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

export default connect(
    state=>({count:state.count,numOfRen:state.personList.length}),
    {
        jia:creatIncreaseAction,
        jian:creatDecreaseAction,
        jiaAsync:creatIncreaseAsyncAction,
    }
)(Count)