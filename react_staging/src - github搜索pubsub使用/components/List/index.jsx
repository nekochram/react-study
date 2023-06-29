import React, { Component } from "react";
import PubSub from 'pubsub-js'
import "./index.css";
export default class List extends Component {
    state={
        users:[],
        isFirst:true,
        isLoading:false,
        isError:''
    }
    componentDidMount(){
        this.token=PubSub.subscribe('state',(_,data)=>{
            this.setState(data)
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }
  render() {
    const { users, isFirst, isLoading, isError } = this.state;
    return (
      <div className="items">
        {isFirst ? (
          <h2>输入并搜索</h2>
        ) : isLoading ? (
          <h2>加载中...</h2>
        ) : isError ? (
          <h2>{isError}</h2>
        ) : users.length===0 ? (
          <h2>结果为空</h2>
        ) : (
          users.map((obj) => {
            return (
              <div className="item" key={obj.id}>
                <a href={obj.html_url}>
                  <img src={obj.avatar_url} alt="avatar" />
                </a>
                <p>{obj.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
