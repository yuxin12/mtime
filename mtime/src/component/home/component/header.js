import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../home.css'
class Header_d extends Component{
    render (){
        return (
            <div className="header_d">
                Mtime
            </div>
        )
    }
}
const mapStateToProps=(state)=>({

})
const mapDispatchToProps=(dispatch)=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(Header_d)