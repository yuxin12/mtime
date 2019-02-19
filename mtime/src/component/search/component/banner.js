import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../search.css'
import {withRouter} from 'react-router-dom'
import { Carousel } from 'antd';
class Search_banner_d extends Component{
    render(){
        let {advList_d}=this.props
        return (
            <div className="Search_banner_d">
                <Carousel autoplay>
                    <div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1562879705,341387667&fm=26&gp=0.jpg" alt=""/></div>
                    <div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1015189526,3870551537&fm=26&gp=0.jpg" alt=""/></div>
                    <div><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=36170122,2609629791&fm=26&gp=0.jpg" alt=""/></div>
                    <div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1578832690,497279896&fm=26&gp=0.jpg" alt=""/></div>
                </Carousel>,
            </div>
        )
    }

}
const mapStateToProps=(state)=>({
    advList_d:state.toJS().search.advList_d
})
const mapDispatchToProps=(dispatch)=>({

})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Search_banner_d))