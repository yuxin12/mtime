import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {combineReducers} from 'redux-immutable'
import HomeReducer from './reducers/homereducer'
import FindReducer from './reducers/findreducer'
import MallReducer from './reducers/mallreducer'
import MineReducer from './reducers/minereducer'
import TicketReducer from './reducers/ticketreducer'
const reducer=combineReducers({
    home:HomeReducer,
    find:FindReducer,
    mall:MallReducer,
    mine:MineReducer,
    ticket:TicketReducer,
})
const store=createStore(reducer,applyMiddleware(thunk))
export default store;