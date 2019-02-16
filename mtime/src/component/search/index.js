import React,{Component} from 'react'
import {connect} from 'react-redux'
import HeaderSearch_d from './component/header'
class Search extends Component{
    render (){
        return (
            <div className="search_d">
               <HeaderSearch_d/>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({

})
const mapDispatchToProps=(dispatch)=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(Search)