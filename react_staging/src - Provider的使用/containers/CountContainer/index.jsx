import CountUI from '../../components/Count'
import {connect} from 'react-redux'
import {creatIncreaseAction,creatDecreaseAction,creatIncreaseAsyncAction} from '../../redux/count_action'
function mapStateToProps(state){
    return {count:state}
}
function mapDispatchToProps(dispatch) {
    return {
        jia:data=>dispatch(creatIncreaseAction(data)),
        jian:data=>dispatch(creatDecreaseAction(data)),
        jiaAsync:(data,time)=>dispatch(creatIncreaseAsyncAction(data,time)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)