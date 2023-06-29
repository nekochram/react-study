import {INCREASE,DECREASE} from '../constant'
const initCount=0
export default function countReducer(preState=initCount,action) {
    const {type,data}=action
    switch (type) {
        case INCREASE:
            return preState + Number(data)
        case DECREASE:
            return preState - Number(data)
        default:
            return preState
    }
}