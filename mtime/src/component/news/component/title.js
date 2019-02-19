import React,{Component} from "react"
import {connect} from 'react-redux'
class New_title_d extends Component{
    render(){
        let {newsDetail}=this.props
        return (
            <div className="news_title_all_d">
                <h2 className="news_title_d">{newsDetail.title}</h2>
                <p className="new_content_d">
                    <span>评论数{newsDetail.commentCount}</span>
                    <span>相关电影/影人</span>
                </p>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    newsDetail:state.toJS().home.newsDetail
})
const mapDispatchToProps=(dispatch)=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(New_title_d)