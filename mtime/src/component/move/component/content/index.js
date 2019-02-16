import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../../move.css'
import {withRouter } from 'react-router-dom';
import action from "../../../../store/action";
import BScroll from 'better-scroll'
class contentList_d extends Component{
    render (){
        let {allcontent_d}=this.props;
        console.log(allcontent_d)
        return (
            <div className="contentList_d">
                <div className="content_active_header_d">
                    <i className="iconfont content_active_header_goback_d" onClick={this.contentList_goback.bind(this)}>&#xe6b0;</i>
                    <p className="content_active_header_title_d">全部评论</p>
                </div>
                <div className="contentList_box_d" ref="contentList_box_d">
                    <div className="contentList_scroll_d">
                        {
                            allcontent_d.length>0?<ul className="contentList_ul_d">
                                {
                                    allcontent_d.map((item,index)=>{
                                        return <li className="contentList_li_m_d" key={index} onClick={this.goContentDetails.bind(this,item.id)}>
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
                                    })
                                }
                            </ul>:""
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getAllContent_d()
        let box=this.refs.contentList_box_d;
        var bScroll=new BScroll(box,{
            click:true
        })
        console.log(bScroll)
    }
    contentList_goback(){
        this.props.history.goBack(-1);
    }
    goContentDetails(id){
        this.props.history.push("/contentdetails/"+id);
    }
}
const mapStateToProps=(state)=>({
    allcontent_d:state.toJS().move_d.allComments
})
const mapDispatchToProps=(dispatch)=>({
    getAllContent_d(){
        dispatch(action.getAllContent_d(this.match.params.id))
    }
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(contentList_d))