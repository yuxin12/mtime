import React, { Component } from 'react'
import { connect } from 'react-redux';
import "antd/dist/antd.css";
import { Carousel } from 'antd';
import { NavLink } from 'react-router-dom';

class Lunbo extends Component{
        render(){
             let {scrollImg,navigatorIcon} = this.props;
               return (
              <div>
                        <div className="malllunbo">
                        <Carousel autoplay>
                                {
                                        scrollImg.map((el,index)=>{
                                                return (
                                                        <div  key={index}>
                                                        <NavLink to={el.url}>
                                                            <img src={el.image}/>
                                                        </NavLink>
                                                    </div>
                                                )       
                                        })
                                }
                         </Carousel>,     
                </div>
                <div className="mallmenu">
                    <ul>
                        {
                            navigatorIcon.map((el,index)=>{
                                return (
                                  <a href={el.url} key={new Date().getTime()+index}>
                                        <li>
                                                <img src={el.image}/>
                                                <span>
                                                {el.iconTitle}
                                                </span>
                                        </li>
                                  </a>
                                )
                            })
                        }
                    </ul>
            </div>
              </div>
               )
        }
}
const mapStateToProps = (state) => {
        return {
                scrollImg:state.getIn(["mall","scrollImg"]),
                navigatorIcon:state.getIn(["mall","navigatorIcon"])
        }
}
const mapDispatchToProps = (dispatch) => {
        return {
              
        }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Lunbo)
