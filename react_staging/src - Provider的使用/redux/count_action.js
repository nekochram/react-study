import {INCREASE,DECREASE} from './constant'
export const creatIncreaseAction=data=>({type:INCREASE,data})
export const creatDecreaseAction=data=>({type:DECREASE,data})
export const creatIncreaseAsyncAction=(data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(creatIncreaseAction(data))
        },time)
    }
}