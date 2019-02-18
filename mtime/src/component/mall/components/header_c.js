import React, {
    Component
}
    from 'react';
import "../css/header_c.css"
import { NavLink } from 'react-router-dom';
import {  Input, Icon} from 'antd';
import "antd/dist/antd.css";
import 'moment/locale/zh-cn';


class Header_C extends Component{
    render() {
        let {
            leftIcon,
            rightIcon,
            leftTo,
            rightTo,
            searchPlaceholder
        } = this.props;
        return (
            <div className="header_c">
                <div>
                     <NavLink to={leftTo||"/home"}>
                             < Icon className = "icon"  type = { leftIcon || "scan" } />
                     </NavLink>
            </div>
                <div className="ipt">
                        <Input 
                     placeholder={searchPlaceholder||"搜索正版电影 周边"}
                     prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }}
                      size="default" />}/>
             </div>
                <div>
                      {/* < NavLink to = {rightTo || "/home"} >
                                            < Icon className = "icon" type = { rightIcon || "scan"} />
                     < /NavLink> */}
                       <NavLink to={rightTo||"/home"}>
                             < Icon className = "icon"  type = { rightIcon || "scan" } />
                     </NavLink>
                </div>
            </div>
        )
    }
}
export default Header_C;