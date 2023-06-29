import React, { Component } from 'react'
import {connect} from 'react-redux'
import { creatIncreaseAction } from '../../redux/count_action'
class Count extends Component {
    add=()=>{
        this.props.jia(1)
    }
  render() {
    return (
      <>
        <h3>当前Count的值是：{this.props.count}</h3>
        <button onClick={this.add}>加</button>
      </>
    )
  }
}

export default connect(
    state=>({count:state}),
    {
        jia:creatIncreaseAction
    }
)(Count)