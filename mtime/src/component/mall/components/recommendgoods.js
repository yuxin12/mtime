import React, { Component } from 'react'
import { connect } from 'react-redux';
import actions from "./../../../store/action/mall"
// import "./../../../common/css/mall/index.css"


class RecommendGoods extends Component{
    render() {
        let {recommendsgoodslist} = this.props;
        return (
            <div className="recommendGoods">
                <ul className="recommendGoods1">
                    {
                        recommendsgoodslist.map((el,index)=>{
                                return (
                                <li key={index+new Date().getTime()}>
                                    <div>
                                        <a href={el.url}>
                                            <img src={el.image}/> 
                                        </a> 
                                    </div>
                                    <div>
                                        <a href={el.url}>
                                                 <h4>{el.goodsTip?<span className="ziying">{el.goodsTip}</span>:""}&nbsp;{el.name}</h4>
                                        </a> 
                                        <p></p>
                                        <p>￥{(el.marketPrice/100).toFixed(1)}</p>
                                    </div>
                                 </li>
                                 )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        this.props.getRecommendGoods();
    }
}

 const MapStateToProps = (state) => ({
    recommendsgoodslist:state.getIn(["mall","recommendsgoodslist"])
})

 const MapDispatchToProps = (dispatch) => ({
        getRecommendGoods(){
            dispatch(actions.GetRecommend(dispatch))
        }
 })

export default connect(MapStateToProps,MapDispatchToProps)(RecommendGoods);