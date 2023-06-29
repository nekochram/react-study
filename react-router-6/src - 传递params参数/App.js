import React from "react";
import {NavLink,useRoutes} from 'react-router-dom'
import routers from './router/index'

export default function App() {
    function computedActiveClassName({isActive}) {
        return isActive? 'list-group-item atguigu' : 'list-group-item'
    }
    const a=useRoutes(routers)
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
                    {a}
                </div>
                </div>
            </div>
        </div>
    </>
    )
}

