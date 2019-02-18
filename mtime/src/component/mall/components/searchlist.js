import  React,{ Component,Fragment } from 'react';
import Header_C from "./header_c";
import { Select } from 'antd';
import actions from "./../../../store/action/mall"

import "../css/searchlist.css";
import { connect } from 'react-redux';
import  BScroll  from 'better-scroll';

class SearchList extends Component{
    constructor(){
        super();
        this.state={
            topicId:0,
            categoryId1:25,
            categoryId2:0

        }
    }
            render(){
                const Option = Select.Option;
                let {selectCategoryList,selectTopics,selectgoodslist} = this.props;
                console.log(this.props)
                    return (
                        <div id="mallsearchlist" >
                                <Header_C leftIcon="left" leftTo="/mall" rightIcon="inbox"  rightTo="home"/>
                                <div className="wrapper searchlistBs " ref="searchlistBs">
                                        <div className="content">
                                                    <div className="selectbar">
                                                        <Select dropdownClassName="selectDown"  defaultValue="priceHigh" size="large" style={{ width:120,height:40 }} >
                                                            <Option value="priceHigh">价格从高到低</Option>
                                                            <Option value="priceLow">价格从低到高</Option>
                                                            <Option value="starHigh">好评从高到低</Option>
                                                            <Option value="starLow">销量从高到低</Option>
                                                        </Select><span>|</span>
                                                        <Select   onChange={this.chagetopicId.bind(this)}  dropdownClassName="selectDown" defaultValue="主题角色" size="large" maxTagCount={10} style={{ width:120,height:40 }}  >
                                                                {selectTopics.length>0?
                                                                        selectTopics.map((el,index)=>{
                                                                            return (
                                                                                <Option className="topicSelectOption" key={index+new Date().getTime()} value={el.ID}>
                                                                                    <div>
                                                                                        {/* <img src={el.Logo}/> */}
                                                                                        <span>
                                                                                            {el.ShortTitle}
                                                                                        </span>
                                                                                    </div>
                                                                                </Option>
                                                                            )
                                                                        }):""
                                                                }
                                                        </Select><span>|</span>
                                                        <Select   onChange={this.chagecategoryId1.bind(this)} defaultValue="玩具模型" size="large" style={{ width:120,height:40 }} >
                                                                {selectCategoryList.length>0?
                                                                        selectCategoryList.map((el,index)=>{
                                                                            return (
                                                                                <Option className="topicSelectOption" key={index+new Date().getTime()} value={el.categoryId}>
                                                                                    <div>
                                                                                        {/* <img src={el.Logo}/> */}
                                                                                        <span>
                                                                                            {el.name}
                                                                                        </span>
                                                                                    </div>
                                                                                </Option>
                                                                            )
                                                                        }):""
                                                                }
                                                        </Select>
                                                    </div>

                                                    <div className="selectgoodslist">
                                                    {
                                                    selectgoodslist.length >0 ?
                                                        <ul className="selectgoodslist1">
                                                                {
                                                                    selectgoodslist.map((el,index)=>{
                                                                            return (
                                                                                <li key={index+new Date().getTime()}>
                                                                                    <div>
                                                                                        <a href={el.url}>
                                                                                            <img src={el.imageSrc}/> 
                                                                                        </a> 
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href={el.url}>
                                                                                                <h4>{el.goodsTip?<span className="ziying">{el.goodsTip}</span>:""}&nbsp;{el.name}</h4>
                                                                                        </a> 
                                                                                        <p></p>
                                                                                        <p>￥{(el.minSalePrice/100).toFixed(1)} <del>￥{(el.marketPrice/100).toFixed(1)}</del></p>
                                                                                    </div>
                                                                                </li>
                                                                            )
                                                                    })
                                                                }
                                                        </ul>
                                                    :""
                                        }
                                                    </div>

                                                
                                     </div>
                                </div>

                        </div>
                    )
            }
            chagetopicId(val){
                // console.log(val);
                this.state.topicId = val;
                this.props.getSearchGoods(this.changeurl());
            }
            chagecategoryId1(val){
                this.state.categoryId1 = val;
                this.props.getSearchGoods(this.changeurl());
                // console.log(val);
            }
            changeurl(){
                    return {
                        topicId:this.state.topicId,
                        categoryId1:this.state.categoryId1,
                        categoryId2:this.state.categoryId2
                    }
            }
            componentDidMount(){
                    this.props.getSelections()
            }
            componentDidUpdate(){
                if(!this.searchlistBscroll){
                    this.searchlistBscroll=new BScroll(this.refs.searchlistBs,{
                        click:true,
                        probeType: 3
                    });
                }
            
            }
}


const MapStateToProps=(state)=>({
    selectTopics:state.getIn(["mall","selectTopics"]),
    selectCategoryList:state.getIn(["mall","selectCategoryList"]),
    selectgoodslist:state.getIn(["mall","selectgoodslist"]),
})
const MapDispatchToProps=(dispatch)=>({
        getSelections(){
            dispatch(actions.getSelections());
        },
        getSearchGoods(obj){
            dispatch(actions.getSearchGoods(obj));
        }
})

export default  connect(MapStateToProps,MapDispatchToProps)(SearchList);