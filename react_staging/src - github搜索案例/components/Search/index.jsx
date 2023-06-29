import React, { Component,createRef} from 'react'
import axios from 'axios'
export default class Search extends Component {
    constructor(){
        super()
        this.inputRef=createRef()
    }
    handleClick=()=>{
        const {saveState}=this.props
        const {current:{value:keyword}}=this.inputRef
        saveState({isFirst:false,isLoading:true})
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res=>{
            saveState({users:res.data.items,isLoading:false})
        },err=>{
            saveState({isError:err.message,isLoading:false})
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
