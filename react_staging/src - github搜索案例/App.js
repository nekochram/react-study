import React from "react";
import Search from './components/Search'
import List from './components/List'
export default class App extends React.Component{
    state={
        users:[],
        isFirst:true,
        isLoading:false,
        isError:''
    }
    saveState=(stateObj)=>{
        this.setState(stateObj)
    }
    render(){
        const {isFirst,isLoading,isError}=this.state
        return (
            <>
                <Search saveState={this.saveState}/>
                <List users={this.state.users} isFirst={isFirst} isLoading={isLoading} isError={isError}/>
            </>
        )
    }
}