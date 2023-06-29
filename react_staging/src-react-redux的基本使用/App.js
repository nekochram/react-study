import React from "react";
import Count from "./containers/CountContainer";
import store from "./redux/store";
export default class App extends React.Component{
    render(){
        return (
            <>
                <Count store={store}/>
            </>
        )
    }
}