import React,{useContext, useState} from 'react'
import Mask from '../../UI/Mask/Mask'
import classes from './CartDetail.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Meal from '../../Meals/Meal/Meal'
import cartContext from '../../../store/context'
import Confirm from '../../UI/Confirm/Confirm'
export default function CartDetail() {
    const {items,clearCart}=useContext(cartContext)
    const [showConfirm,setShowConfirm]=useState(false)
    const confirmHandler=()=>{
        clearCart()
        setShowConfirm(false)
    }
    const cancelHandler=(event)=>{
        event.stopPropagation()
        setShowConfirm(false)
    }
    const showConfirmDialog=()=>{
        setShowConfirm(true)
    }
  return (
    <Mask onClick={cancelHandler}>
        {showConfirm && <Confirm onOk={confirmHandler} onCancel={cancelHandler} confirmText='确认清空购物车吗？'/>}
        <div className={classes.CartDetails} onClick={event=>event.stopPropagation()}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                    <div className={classes.Clear} onClick={showConfirmDialog}>
                        <FontAwesomeIcon icon={faTrash}/>
                        <span>清空购物车</span>
                    </div>
                </header>

                <div className={classes.MealList}>
                    {
                        items.map(item =>
                            <Meal noDesc key={item.id} meal={item}/>
                        )
                    }
                </div>
            </div>
    </Mask>
  )
}
