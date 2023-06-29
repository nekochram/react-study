import React, { Component } from 'react'
import qs from 'qs'

export default class Detail extends Component {
  render() {
    const obj=qs.parse(this.props.location.search.slice(1))||{}
    const {id,title}=obj
    return (
        <div>
            <ul>
            <li>
                <p>{id}</p>
            </li>
            <li>
                <p>{title}</p>
            </li>
            </ul>
        </div>
    )
  }
}
