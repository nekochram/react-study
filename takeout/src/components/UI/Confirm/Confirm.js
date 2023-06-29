import React from 'react';
import Mask from '../Mask/Mask'
import classes from './Confirm.module.css';

const Confirm = (props) => {
    return (
        <Mask className={classes.ConfirmOuter}>
            <div className={classes.Confirm}>
                <p className={classes.ConfirmText}>{props.confirmText}</p>

                <div>
                    <button
                        onClick={(e)=>{props.onCancel(e)}}
                        className={classes.Cancel}>取消</button>
                    <button
                        onClick={(e)=>{props.onOk(e)}}
                        className={classes.Ok}>确认</button>
                </div>
            </div>
        </Mask>
    );
};

export default Confirm;
