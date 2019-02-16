import React,{Component} from 'react'
import {connect} from 'react-redux'
class Adv_d extends Component{
    render(){
        let {areaFirst}=this.props
        return(
            <div className="adv_d">
                <img src={areaFirst.image} alt=""/>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    areaFirst:state.toJS().home.areaFirst
})
const mapDispatchToProps=(dispatch)=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(Adv_d)