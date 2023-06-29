import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import {creatAddPersonAction} from '../../redux/actions/person'
class Person extends Component {
    addPerson=()=>{
        const {value:name}=this.inputNameNode
        const {value:age}=this.inputAgeNode
        const obj={id:nanoid(),name,age}
        this.props.addPerson(obj)
    }
  render() {
    return (
      <>
        <h3>Person组件</h3>
        <p>上方组件的count值为：{this.props.countValue}</p>
        <input type="text" placeholder='input name' ref={current=>this.inputNameNode=current}/>
        <input type="text" placeholder='input age' ref={current=>this.inputAgeNode=current}/>
        <button onClick={this.addPerson}>确认</button>
        <ul>
            {
                this.props.list.map(p=>{
                    return (
                        <li key={p.id}>姓名：{p.name} - 年龄：{p.age}岁</li>
                    )
                })
            }
        </ul>
      </>
    )
  }
}

export default connect(
    state=>({list:state.personList,countValue:state.count}),
    {
        addPerson:creatAddPersonAction
    }
)(Person)