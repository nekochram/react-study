const initCount=0
export default function countReducer(preState=initCount,action) {
    const {type,data}=action
    switch (type) {
        case 'increase':
            return preState + Number(data)
        case 'decrease':
            return preState - Number(data)
        default:
            return preState
    }
}