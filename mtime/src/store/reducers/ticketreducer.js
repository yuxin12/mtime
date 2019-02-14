import Immutable from 'immutable'
const TicketDefaultState=Immutable.fromJS({
    aa:"131234"
})
export default (state=TicketDefaultState,action)=>{
    return state;
}
