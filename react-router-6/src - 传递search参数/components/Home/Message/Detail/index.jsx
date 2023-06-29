import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function Detail() {
    const [search,setSearch]=useSearchParams()
    const id=search.get('id')
    const title=search.get('title')
    const content=search.get('content')
  return (
    <div>
        <ul>
            <button onClick={()=>{setSearch('id=123&title=标题&content=内容区域')}}>改变query参数</button>
            <li>{id}</li>
            <li>{title}</li>
            <li>{content}</li>
        </ul>
    </div>
  )
}
