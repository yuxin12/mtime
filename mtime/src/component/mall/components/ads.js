import React, { Component } from 'react'
import { connect } from 'react-redux';
import "antd/dist/antd.css";

import BScroll  from 'better-scroll';
import actions from "./../../../store/action/mall";


class Ads extends Component{
    render(){
            let {cellA,cellB,cellC,topic,adsGoodsindex} = this.props;
           return (
               <div>
                    <div>
                             <div className="newpros">
                            <div className="leftad">
                                <a>
                                <img src={cellA.img}/>
                                </a>
                                </div>
                            <div className="rightad">
                                <ul>
                                    {   
                                    cellC.list? cellC.list.map((el,index)=>{
                                        return(
                                            <li key= {index+ new Date().getTime()}>
                                                <a href="#">
                                                    <img src={el.image}/>
                                                </a>
                                            </li>
                                        )
                                    }):""
                                    }
                                </ul>
                            </div>
                            <div className="bottomad">
                                <a>
                                    <img src={cellB.img}/>
                                </a>
                            </div>
                   </div>   
                    </div>
                    <div className="WoW " >
                            {
                                topic.length>0?<div className="WoW wrapper" ref="WoW" style={{backgroundImage:topic[adsGoodsindex].backgroupImage}}>
                                <ul className="heros content">
                                    {console.log(topic[adsGoodsindex].backgroupImage)}
                                    {
                                        topic.map((el,index)=>{
                                                return (
                                                    <li key={new Date().getTime()+index} onClick={this.props.handleChangeGoodsIndex.bind(this,index)}>
                                                  
                                                        <img src={el.uncheckImage}/>
                                               
                                                    </li>
                                                )
                                        })
                                    }
                                </ul>
                        </div>:""
                            }
                    </div>
                   
                            {  topic.length>0? <div> <p> {topic[adsGoodsindex].titleEn }</p>
                                                          <h2> {topic[adsGoodsindex].titleCn }</h2> </div>:""}
                 
                    <div className="herosGoods">
                          <ul className="herosGoods">
                                {
                                             topic.length>0? topic[adsGoodsindex].subList.map((el,index)=>{
                                                        return (
                                                            <li key={new Date().getTime()+index}>
                                                                <img src={el.image}/>
                                                                <p>{el.title}</p>
                                                                <p className="goodsPrice">￥69</p>
                                                            </li>
                                                        )
                                            }):""
                                    }
                          </ul>
                    </div>
               </div>
           )
    }
componentDidUpdate() {
    if(this.props.topic[0]){
                this.adscroll =  new BScroll(this.refs.WoW,{
                    scrollX:true
    })
    }
}
//更改当前goodslist的index


}
const mapStateToProps = (state) => {
    return {
        cellA:state.getIn(["mall","cellA"]),
        cellB:state.getIn(["mall","cellB"]),
        cellC:state.toJS().mall.cellC,
        topic:state.getIn(["mall","topic"]),
        adsGoodsindex:state.getIn(["mall","adsGoodsindex"])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
          handleChangeGoodsIndex(index){
                actions.ChangeGoodsIndex(dispatch,index);
            }
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Ads)