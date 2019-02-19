import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../../move.css'
import {withRouter } from 'react-router-dom';
import action from "../../../../store/action";
import BScroll from 'better-scroll'
import Header_all_d from '../../../header/index'
class contentList_d extends Component{
    render (){
        let {allcontent_d,allCommentsIndex}=this.props;
        return (
            <div className="contentList_d">
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
        this.props.getAllContent_d(1)
    }
    componentWillReceiveProps(){
        this.scroll&&this.scroll.finishPullUp();
    }
    componentDidUpdate(){
        if(!this.scroll) {
            this.scroll = new BScroll(this.refs.contentList_box_d, {
                pullUpLoad: true
            });
            this.scroll.on("pullingUp", () => {
                if (this.props.allCommentsNum >this.props.allcontent_d.length) {
                    this.props.getAllContent_d()
                }
            })

        }
    }
    contentList_goback(){
        this.props.history.goBack(-1);
    }
    goContentDetails(id){
        this.props.history.push("/contentdetails/"+id);
    }
    componentWillUnmount(){
        this.props.resetContentList_d()
    }
}
const mapStateToProps=(state)=>{
    return {
        allcontent_d:state.toJS().move_d.allComments,
        allCommentsNum:state.toJS().move_d.allCommentsNum,
        allCommentsIndex:state.toJS().move_d.allCommentsIndex
    }
}
const mapDispatchToProps=(dispatch)=>({
    getAllContent_d(index){
        dispatch(action.getAllContent_d(this.match.params.id))
    },
    getAllContentone_d(){
        dispatch(action.getAllContentone_d(this.match.params.id))
    },
    resetContentList_d(){
        dispatch(action.resetContentList_d())
    }
})
export default withRouter(Header_all_d(withRouter(connect(mapStateToProps,mapDispatchToProps)(contentList_d))))