import React, { Component,Fragment } from 'react';
import './App.css';
import {HashRouter as Router,Route,Switch,Redirect,NavLink} from 'react-router-dom'
import ReactLoading from 'react-loadable'
import Loading from './Loding/loading'
import store from '../store/index'
import {Provider} from 'react-redux'
import '../common/js/flexble'
import '../common/css/reset.css'
import "antd/dist/antd.css";
const Home=ReactLoading({
    loader:()=>import("./home/index"),
    loading:Loading
})
const Ticket =ReactLoading({
    loader:()=>import('./ticket/index'),
    loading:Loading
})
const Mall =ReactLoading({
    loader:()=>import('./mall/index'),
    loading:Loading
})
const Find =ReactLoading({
    loader:()=>import('./find/index'),
    loading:Loading
})
const Mine =ReactLoading({
    loader:()=>import('./mine/index'),
    loading:Loading
})
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
            <Provider store={store}>
                <Switch>
                    <Route path="/home" exact render={()=>{
                        return <Home/>
                    }}/>
                    <Route path="/ticket" render={()=>{
                        return <Ticket/>
                    }}/>
                    <Route path="/mall" render={()=>{
                        return <Mall/>
                    }}/>
                    <Route path="/find" render={()=>{
                        return <Find/>
                    }}/>
                    <Route path="/mine" render={()=>{
                        return <Mine/>
                    }}/>
                    <Redirect path="/" to="/home"></Redirect>
                </Switch>
            </Provider>
            <div className="footer">
                <NavLink to="/home">首页</NavLink>
                <NavLink to="/ticket">购票</NavLink>
                <NavLink to='/mall'>商城</NavLink>
                <NavLink to="find">发现</NavLink>
                <NavLink to="/mine">我的</NavLink>
            </div>
        </Fragment>

      </Router>
    );
  }
}

export default App;
