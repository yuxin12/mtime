import Immutable from 'immutable'
const FindDefaultState=Immutable.fromJS({
    newsDetail:{}
})
export default (state=FindDefaultState,action)=>{
    switch (action.type){
        case "GETHOTPOINT_DETAILS":
            let newStatea=state.updateIn(["newsDetail"],item=>item=action.value);
            return newStatea;
            break;
    }
    return state;
}