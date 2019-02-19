import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../search.css'
import {withRouter } from 'react-router-dom';
import action from '../../../store/action/index';
class Header_Search_d extends Component{
    render (){
        let {searchInputVal_d}=this.props;
        return (
            <div className="search_header_d">
                <div className="search_goback_d" onClick={this.goback.bind(this)}>&lt;</div>
                <input className="search_header_input_d"
                       onKeyUp={this.props.searchMoves.bind(this)}
                       value={this.props.searchInputVal_d}
                       onChange={this.props.changeInputVal_d.bind(this)}
                       type="text" placeholder={"请输入要搜索的内容"}/>
                <button className="search_search_btn">搜索</button>
            </div>
        )
    }
    goback(){
        this.props.history.goBack(-1);
    }
}
const mapStateToProps=(state)=>({
    searchInputVal_d:state.toJS().search.searchInputVal_d
})
const mapDispatchToProps=(dispatch)=>({
    searchMoves(){
      dispatch(action.searchMoves())
    },
    changeInputVal_d(e){
        dispatch(action.changeInputVal_d(e.target.value))
    }
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header_Search_d))