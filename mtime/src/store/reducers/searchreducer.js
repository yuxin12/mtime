import Immutable from 'immutable'
const FindDefaultState=Immutable.fromJS({
    advList_d:[],
    keyWord_d:[],
    searchInputVal_d:"",
    searchmove_d:[],
})
export default (state=FindDefaultState,action)=>{
    switch (action.type){
        case "GETSEARCHBANNER_D":
            let newSearchState=state.updateIn(["advList_d"],item=>item=action.value)
            return newSearchState;
            break;
        case "GETSEARCHKEYWORD":
            let newSearchState1=state.updateIn(["keyWord_d"],item=>item=action.value)
            return newSearchState1;
            break;
        case "CHANGEINPUTVAL":
            let newSearchState2=state.updateIn(["searchInputVal_d"],item=>item=action.value)
            return newSearchState2;
            break;
        case "SEARCHMOVES_D":
            let newSearchState3=state.updateIn(["searchmove_d"],item=>item=action.value)
            return newSearchState3;
            break;

    }
    return state;
}