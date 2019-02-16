import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../move.css'
import {withRouter } from 'react-router-dom';
class Move_content_d extends Component{
    render (){
        let {allComments}=this.props
        return (
            <div className="Move_content_box_d">
                {
                    allComments.length>0?<div>
                        <div className="Move_content_header_d"
                        onClick={this.goContentDetail.bind(this)}>
                            精选影评({allComments.length})
                        </div>
                        <ul className="Move_content_d">
                            {
                                allComments.map((item,index)=>{
                                    if(index<1){
                                        return (
                                            <li key={index}>
                                                <h2>{item.title}</h2>
                                                <div className="Move_content_content_d">
                                                    <p>{item.content}</p>
                                                </div>
                                                <div className="publish_user">
                                                    <img src={item.headurl} alt=""/>
                                                    <div>
                                                        <p>{item.nickname}</p>
                                                        <p>2018-09-13评论<span>{item.rating}</span></p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>:""
                }
            </div>
        )
    }
    goContentDetail(){
        this.props.history.push("/contentlist/"+this.props.match.params.id);
    }
}
const mapStateToProps=(state)=>({
    allComments:state.toJS().move_d.allComments
})
const mapDispatchToProps=(dispatch)=>({

})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Move_content_d))