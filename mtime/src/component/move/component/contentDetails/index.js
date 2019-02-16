import React,{Component} from 'react'
import {connect} from 'react-redux'
import Content_header_detail_d from './component/header'
import {withRouter } from 'react-router-dom';
class Move_content_detail_d extends Component{
    render (){
        return (
            <div className="Move_content_detail_d">
                <Content_header_detail_d/>
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
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Move_content_detail_d))