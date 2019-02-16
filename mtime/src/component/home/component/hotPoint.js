import React,{Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import '../home.css'
class HotPoint extends Component{
    render(){
        let {hotPoints} =this.props
        return (
            <div className="hotpoint">
                <p className="hotpoint_p_d">
                    今日热点
                </p>
                <ul className="hotpoint_ul_d">
                    {
                        hotPoints.map((item,index)=>{
                            return (
                                <li key={index} className="hotpoint_li_d">
                                   <NavLink to={"/news/"+item.id+"/20192150474436375"}>
                                       <img src={item.img} className="hotpoint_img_d" alt=""/>
                                       <div className="hotpoint_div_d">
                                           <p className="hotpoint_title_d">{item.title}</p>
                                           <p className="hotpoint_desc_d">{item.desc}</p>
                                           <p className="hotpoint_time_d">2016-09-13</p>
                                       </div>
                                   </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    hotPoints:state.toJS().home.hotPoints
})
const mapDispatchToProps=(dispatch)=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(HotPoint)