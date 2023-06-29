import React, { Component,createRef} from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
    constructor(){
        super()
        this.inputRef=createRef()
    }
    handleClick=()=>{
        const {current:{value:keyword}}=this.inputRef
        PubSub.publish('state',{isFirst:false,isLoading:true})
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res=>{
            PubSub.publish('state',{users:res.data.items,isLoading:false})
        },err=>{
            PubSub.publish('state',{isError:err.message,isLoading:false})
        })
    }
  render() {
    return (
      <div>
        <input type="text" placeholder='输入以搜索' ref={this.inputRef}/>
        <button onClick={this.handleClick}>搜索</button>
      </div>
    )
  }
}
