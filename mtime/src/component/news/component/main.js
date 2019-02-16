import React,{Component} from "react"
import {connect} from 'react-redux'
import action from "../../../store/action";
class New_main_d extends Component{
    render(){
        let {newsDetail}=this.props;
        console.log(newsDetail.content)
        return (
            <div className="news_main_all_d">
                {
                    <div dangerouslySetInnerHTML={{ __html: newsDetail.content }} />
                }
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    newsDetail:state.toJS().search.newsDetail
})
const mapDispatchToProps=(dispatch)=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(New_main_d)