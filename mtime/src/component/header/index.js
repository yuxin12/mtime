import React,{Component} from 'react'
import './index.css'
import {withRouter} from 'react-router-dom'
const Header_d=(Com)=>{
   return class extends Component{
       goback=()=>{
           this.props.history.goBack()
       }
        render (){
            console.log(this,"this.props")
            let defaultProps={
                icon1:"",
                icon2:"",
                title:"",
            }
            return (
                <div className="header_all_d">
                    <div className="header_all_top_d">
                        <i className="iconfont header_all_left_d" onClick={this.goback}>{this.props.icon1?this.props.icon1:defaultProps.icon1}</i>
                        <span className="header_all_center_d">{this.props.title?this.props.title:defaultProps.title}</span>
                        <i className="iconfont header_all_right_d">{this.props.icon2?this.props.icon2:defaultProps.icon2}</i>
                    </div>
                    <Com/>
                </div>
            )
        }
    }
}
export default Header_d