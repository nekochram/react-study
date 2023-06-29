import React, {useContext, useState} from 'react';
import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png';
import cartContext from '../../store/context';
import CartDetail from './CartDetail/CartDetail';
import Checkout from './Checkout/Checkout'
const Cart = () => {

    const {totalPrice,totalAmount} = useContext(cartContext);
    const [visibility,setVisibility]=useState(false)
    const switchVisibility = ()=>{
        if(totalAmount===0){
            setVisibility(false)
            return
        }
        setVisibility(prevState=>!prevState)
    }
    const [showCheckout,setShowCheckout]=useState(false)
    const showCheckoutPage=()=>{
        if(totalAmount===0)return
        setShowCheckout(true)
    }
    const hideCheckoutPage=()=>{
        setShowCheckout(false)
    }
    return (
        <div className={classes.Cart} onClick={switchVisibility}>
            {showCheckout && <Checkout onHide={hideCheckoutPage}/>}
            {/*引入购物车的详情*/}
            {visibility&&<CartDetail/>}
            <div className={classes.Icon}>
                <img src={iconImg} alt='购物袋'/>
                {totalAmount!==0 && <span className={classes.TotalAmount}>{totalAmount}</span>}
            </div>

            {totalAmount!==0?<p className={classes.Price}>{totalPrice}</p>:<p className={classes.NoMeal}>未选购商品</p>}

            <button className={`${classes.Button} ${totalAmount!==0?'':classes.Disabled}`} onClick={showCheckoutPage}>去结算</button>
        </div>
    );
};

export default Cart;
