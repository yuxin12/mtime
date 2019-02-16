import React,{Component} from 'react'
import {connect} from 'react-redux'
import action from '../../store/action/index'
import News_header_d from './component/header'
import News_title_d from './component/title'
import New_main_d from './component/main'
import BScroll from 'better-scroll'
import './news.css'
class News_d extends Component{
    render(){
        let {newsDetail}=this.props
        return (
            <div className="news_d">
                <News_header_d/>
                <div className="news_containters_d" ref="news_containters_d">
                    <div className="news_scroll_d">
                        <News_title_d/>
                        <New_main_d/>
                        <div className="haha">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getHotPointDetail()
        let box=this.refs.news_containters_d;
        var bScroll=new BScroll(box,{
            click:true
        })
    }
}
const mapStateToProps=(state)=>({
    newsDetail:state.toJS().search.newsDetail
})
const mapDispatchToProps=(dispatch)=>({
    getHotPointDetail(){
        console.log(this);
        dispatch(action.getHotPointDetail(this.match.params.newsId))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(News_d)