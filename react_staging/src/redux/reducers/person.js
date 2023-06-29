import { ADD_PERSON } from "../constant";
const personList=[{id:1,name:'Tom',age:12}]
export default function personReducer(preState=personList,action) {
    const {type,data}=action
    switch (type) {
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState;
    }
}