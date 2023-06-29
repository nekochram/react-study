import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    const {id,title}=this.props.location.state||{}
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
