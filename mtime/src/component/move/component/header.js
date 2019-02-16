import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../move.css'
import {withRouter } from 'react-router-dom';
class Move_move_d extends Component{
    render (){
        return (
            <div className="move_header_d">
                <i className="move_goback_d iconfont" onClick={this.goback.bind(this)}>&#xe6b0;</i>
                <i className="iconfont start_move_d">&#xe686;</i>
                <i className="move_move_btn iconfont">&#xe629;</i>
            </div>
        )
    }
    goback(){
        this.props.history.goBack(-1);
    }
}
const mapStateToProps=(state)=>({

})
const mapDispatchToProps=(dispatch)=>({

})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Move_move_d))