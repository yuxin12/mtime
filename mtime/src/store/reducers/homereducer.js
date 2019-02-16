import Immutable from 'immutable'
const HomeDefaultState=Immutable.fromJS({
    hotMovesList:[]
})
export default (state=HomeDefaultState,action)=>{
    switch (action.type){
        case "GETNOWMOVES_D":
            let newState=state.updateIn(["hotMovesList"],item=>item=action.value);
            return newState;
            break;
    }
    return state;
}
