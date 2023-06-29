import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    const {id,title}=this.props.match.params
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
