import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../search.css'
import {withRouter} from 'react-router-dom'
class Search_history_d extends Component{
    render(){
        return (
            <div className="Search_history_d">
                <h2>历史搜索</h2>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({

})
const mapDispatchToProps=(dispatch)=>({

})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Search_history_d))