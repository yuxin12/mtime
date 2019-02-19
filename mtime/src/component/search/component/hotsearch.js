import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../search.css'
import {withRouter} from 'react-router-dom'
class Search_hotsearch_d extends Component{
    render(){
        let {keyWord_d}=this.props
        console.log(keyWord_d)
        return (
            <div className="Search_hotsearch_d">
               <h2>热门搜索</h2>
                <div className="Search_hotsearch_div_d">
                    <ul>
                        {
                            keyWord_d.map((item,index)=>{
                                return <li className="Search_hotsearch_li_d" key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

}
const mapStateToProps=(state)=>({
    keyWord_d:state.toJS().search.keyWord_d
})
const mapDispatchToProps=(dispatch)=>({

})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Search_hotsearch_d))