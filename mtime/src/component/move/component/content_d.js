import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../move.css'
import {withRouter } from 'react-router-dom';
class Move_content_d extends Component{
    render (){
        let {allCommentsOne,allCommentsNum}=this.props
        return (
            <div className="Move_content_box_d">
                {
                    allCommentsOne.length>0?<div>
                        <div className="Move_content_header_d"
                        onClick={this.goContentDetail.bind(this)}>
                            精选影评({allCommentsNum})
                        </div>
                        <ul className="Move_content_d">
                            {
                                allCommentsOne.map((item,index)=>{
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
    allCommentsOne:state.toJS().move_d.allCommentsOne,
    allCommentsNum:state.toJS().move_d.allCommentsNum
})
const mapDispatchToProps=(dispatch)=>({

})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Move_content_d))