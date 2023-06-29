import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'
export default class App extends React.Component{
    state={
        todos:[
            {id:'001',name:'事件1',done:true},
            {id:'002',name:'事件2',done:true},
            {id:'003',name:'事件3',done:false},
            {id:'004',name:'事件4',done:true}
        ]
    }
    addTodo=(todoObj)=>{
        const {todos}=this.state
        this.setState({
            todos:[todoObj,...todos]
        })
    }
    updateTodo=(id,done)=>{
        const {todos}=this.state
        const newTodos=todos.map(todo=>{
            if(todo.id===id){
                return {...todo,done}
            }
            return todo
        })
        this.setState({todos:newTodos})
    }
    deleteTodo=(id)=>{
        const {todos}=this.state
        const newTodos=todos.filter(todo=>{
            return todo.id!==id
        })
        this.setState({todos:newTodos})
    }
    changeAllCheck=(done)=>{
        const {todos}=this.state
        const newTodos=todos.map(todo=>{
            return {...todo,done}
        })
        this.setState({todos:newTodos})
    }
    delAlldoneTodo=()=>{
        const {todos}=this.state
        const newTodos=todos.filter(todo=>{
            return !todo.done
        })
        this.setState({todos:newTodos})
    }
    render(){
        let {todos}=this.state
        return (
            <div className="container">
                <Header addTodo={this.addTodo}/>
                <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                <Footer todos={todos} changeAllCheck={this.changeAllCheck} delAlldoneTodo={this.delAlldoneTodo}/>
            </div>
        )
    }
}