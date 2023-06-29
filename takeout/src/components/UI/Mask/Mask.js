import React from 'react'
import  ReactDOM  from 'react-dom'
import classes from './Mask.module.css'
export default function Mask(props) {
    const maskRoot=document.getElementById('mask')
  return ReactDOM.createPortal(
    <div className={`${classes.mask} ${props.className||''}`} onClick={props.onClick||null}>
        {props.children}
    </div>
  ,maskRoot)
}
