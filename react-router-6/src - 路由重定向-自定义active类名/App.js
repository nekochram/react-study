import React from "react";
import {NavLink,Routes,Route,Navigate} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
export default class App extends React.Component {
  render() {
    function computedActiveClassName({isActive}) {
        return isActive? 'list-group-item atguigu' : 'list-group-item'
    }
    return (
        <>
        <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header"><h2>React Router Demo</h2></div>
            </div>
            </div>
            <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                <NavLink className={computedActiveClassName} to='/about'>About</NavLink>
                <NavLink className={computedActiveClassName} to='/home'>Home</NavLink>
                </div>
            </div>
            <div className="col-xs-6">
                <div className="panel">
                <div className="panel-body">
                    <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/" element={<Navigate to={'/about'}/>}/>
                    </Routes>
                </div>
                </div>
            </div>
        </div>
    </>
    )
  }
}
