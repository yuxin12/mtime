import Immutable from 'immutable'
const HomeDefaultState=Immutable.fromJS({
    hotMovesList:[],
    areaFirst:{},
    hotPoints:[],
    newsDetail:{}
})
export default (state=HomeDefaultState,action)=>{
    switch (action.type){
        case "GETNOWMOVES_D":
            let newState_d=state.updateIn(["hotMovesList"],item=>item=action.value);
            return newState_d;
            break;
        case "GETADV_D":
            let newState1_d=state.updateIn(["areaFirst"],item=>item=action.value)
            return newState1_d;
            break;
        case "GETHOT_POINT_D":
            let newState2_d=state.updateIn(["hotPoints"],item=>item=action.value);
            return newState2_d;
            break
        case "GETHOTPOINT_DETAILS":
            let newStatea=state.updateIn(["newsDetail"],item=>item=action.value);
            return newStatea;
            break;
    }
    return state;
}
