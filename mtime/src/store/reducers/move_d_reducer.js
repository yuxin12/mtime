import Immutable from 'immutable'
const MineDefaultState=Immutable.fromJS({
    moveDetail_d:{},
    peopleType:[],
    allImage_d:[],
    allComments:[]
})
export default (state=MineDefaultState,action)=>{
    switch (action.type){
        case "GETHOTMOVESLIST_D":
            let newStatez=state.updateIn(["moveDetail_d"],item=>item=action.value);
            return newStatez;
            break;
        case "GETMOVEACTOER" :
            let newStatex=state.updateIn(["peopleType"],item=>item=action.value);
            return newStatex;
            break;
        case "GETALLIMAGE_D":
            let newStatev=state.updateIn(["allImage_d"],item=>item=action.value);
            return newStatev;
            break;
        case "GETALLCONTENT_D":
            let newStaten=state.updateIn(["allComments"],item=>item=action.value);
            return newStaten;
            break;
    }
    return state;
}