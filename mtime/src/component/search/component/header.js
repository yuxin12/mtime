import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../search.css'
import {withRouter } from 'react-router-dom';
class Header_Search_d extends Component{
    render (){
        return (
            <div className="search_header_d">
                <div className="search_goback_d" onClick={this.goback.bind(this)}>&lt;</div>
                <input className="search_header_input_d" type="text" placeholder={"请输入要搜索的内容"}/>
                <button className="search_search_btn">搜索</button>
            </div>
        )
    }
    goback(){
        console.log(this)
        this.props.history.goBack(-1);
    }
}
const mapStateToProps=(state)=>({

})
const mapDispatchToProps=(dispatch)=>({

})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header_Search_d))