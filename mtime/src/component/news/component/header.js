import React,{Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class News_header_d extends Component{
    render(){
        return (
            <div className="news_header_d">
                <i className="iconfont news_left_d" onClick={this.goback_new.bind(this)}>&#xe6b0;</i>
                <i className="iconfont news_right_d" >&#xe629;</i>
            </div>
        )
    }
    goback_new(){
        this.props.history.goBack()
    }
}
const mapStateToProps=(state)=>({

})
const mapDispatchToProps=(dispatch)=>({

})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(News_header_d))