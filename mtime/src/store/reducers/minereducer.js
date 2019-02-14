import Immutable from 'immutable'
const MineDefaultState=Immutable.fromJS({
    aa:"131234"
})
export default (state=MineDefaultState,action)=>{
    return state;
}
