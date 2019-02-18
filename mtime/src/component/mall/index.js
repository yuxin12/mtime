import React, { Component } from 'react'
import { connect } from 'react-redux';
import actions from "../../store/action/index"
import Header_C from "./components/header_c"
import Lunbo  from './components/lunbo';
import Goods from "./components/goods"
import Ads  from './components/ads';
import RecommendGoods from "./components/recommendgoods"
import "./css/index.css";
import BScroll  from 'better-scroll';


class Mall extends Component{
    render() {

        return (
            <div className="mall">
                    <Header_C leftIcon="scan" rightIcon="scan"/>
                    <div ref="mallBscroll" className="wrapper">
                        <div className="content">
                            <Lunbo/>
                            <Ads/>
                            <Goods nowindex="0"/>
                            <Goods nowindex="1"/>
                            <Goods nowindex="2"/>
                            <Goods nowindex="3"/>
                            <RecommendGoods/>
                        </div>
                    </div>
                 
            </div>
        )
    }
    componentDidMount() {
        this.props.getMarketimgsdata();
        this.mallBs =  new BScroll(this.refs.mallBscroll,{
            click:true
        })
    // console.log(mallBs)
    }
    componentDidUpdate(){
        if(!this.mallBs){
            this.mallBs =  new BScroll(this.refs.mallBscroll,{
                            click:true
                        })
            }else{
                this.mallBs.refresh();
            }
            console.log(this.mallBs)
        }
      
}

 const MapStateToProps = (state) => ({

})

 const MapDispatchToProps = (dispatch) => ({
     getMarketimgsdata(){
         dispatch(actions.getData());
     }
 })

export default connect(MapStateToProps,MapDispatchToProps)(Mall);