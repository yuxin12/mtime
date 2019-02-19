import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../move.css'
import {withRouter } from 'react-router-dom';
class Short_comment_d extends Component{
    render (){
        let {allShortComments}=this.props
        return (
            <div className="Short_comment_d">
                <div className="Short_comment_top_d">
                    <span>
                        网友短评
                    </span>
                    <i className="iconfont">&#xe65c;</i>
                </div>
                <ul>
                    {
                        allShortComments.map((item,index)=>{
                            return <li key={index} className="Short_comment_li_d">
                                <div className="Short_comment_left_d">
                                    <img src={item.caimg} alt=""/>
                                </div>
                                <div className="Short_comment_right_d">
                                    <div className="Short_comment_cr_d">{item.cr}</div>
                                    <p className="Short_comment_ca_d">{item.ca}</p>
                                    <p className="Short_comment_ce_d" style={{"WebkitBoxOrient":"vertical"}}>{item.ce}</p>
                                    <p className="Short_comment_icon_d"><span><i className="iconfont">&#xe60c;</i>回复</span><span><i className="iconfont">&#xe611;</i>点赞</span></p>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
    goback(){
        this.props.history.goBack(-1);
    }
}
const mapStateToProps=(state)=>({
    allShortComments:state.toJS().move_d.allShortComments
})
const mapDispatchToProps=(dispatch)=>({

})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Short_comment_d))