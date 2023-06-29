import React,{useContext} from 'react';
import classes from './Counter.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';
import cartContext from '../../../store/context';
// 计数器的组件
const Counter = (props) => {
    const {meal}=props
    const {addMealHandler,reduceMealHander}=useContext(cartContext)
    //添加方法
    const addToCart=()=>{
        addMealHandler(meal)
    }
    //减少方法
    const reduceToCart=()=>{
        reduceMealHander(meal)
    }
    return (
        <div className={classes.Counter}>

            {
                (meal.amount && meal.amount !== 0) ? (
                    <>
                        <button className={classes.Sub} onClick={reduceToCart}><FontAwesomeIcon icon={faMinus}/></button>
                        <span className={classes.count}>{meal.amount}</span>
                    </>
                ) : null
            }

            <button className={classes.Add} onClick={addToCart}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    );
};

export default Counter;
