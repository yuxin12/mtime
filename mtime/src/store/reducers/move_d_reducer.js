import Immutable from 'immutable'
const MineDefaultState=Immutable.fromJS({
    moveDetail_d:{},
    peopleType:[],
    allImage_d:[],
    allComments:[],
    allCommentsOne:[],
    allCommentsIndex:1,
    allCommentsNum:0,
    allShortComments:[],
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
            let newStaten=state.updateIn(["allComments"],item=>item=item.concat(action.value.comments));
            let newStaten1=newStaten.updateIn(["allCommentsIndex"],item=>item=item+1);
            let newStaten2=newStaten1.updateIn(["allCommentsNum"],item=>item=action.value.totalCount);
            return newStaten2;
            break;
        case "GETALLCONTENTONE_D":
            let newStatenn=state.updateIn(["allCommentsOne"],item=>item=item.concat(action.value.comments));
            let newStatennn=newStatenn.updateIn(["allCommentsNum"],item=>item=action.value.totalCount);
            return newStatennn;
            break;
        case "GETALLSHORTCONTENT_D":
            let newStatem=state.updateIn(["allShortComments"],item=>item=action.value);
            return newStatem;
            break;
        case "RESETCONTENTLIST_D":
            let newStaten0=state.updateIn(["allComments"],item=>item=[]);
            let newStaten11=newStaten0.updateIn(["allCommentsIndex"],item=>item=1);
            let newStaten22=newStaten11.updateIn(["allCommentsNum"],item=>item=1);
            return newStaten22;
            break;
    }
    return state;
}