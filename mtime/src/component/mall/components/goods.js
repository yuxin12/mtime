import React, { Component ,Fragment} from 'react'
import { connect } from 'react-redux';


 class Goods extends Component{
      
        render(){   
                let {category,nowindex} = this.props;
                return (
                    <Fragment>
                        {
                                 category.length >0 ?
                                  <div className="goods">
                                        <div className="goodsheader">
                                                <p> <b  style={{color:category[nowindex].colorValue}}>{category[nowindex].name}</b>  更多> </p>
                                        </div>
                                        <img src={category[nowindex].image}/>
                                        <hr/>
                                        <ul className="goodslist">
                                              {  category[nowindex].subList.map((el,index)=>{
                                                      return (
                                                              <li key={index+new Date().getTime()}>
                                                                        <img src={ el.image}/>
                                                                        <p>{el.title}</p>
                                                                        <p className="goodsPrice">￥69</p>
                                                              </li>
                                                      )
                                                })}
                                        </ul>
                                  </div>
                                  :""
                       }
                    </Fragment>
                )
        }
}
const MapStateToProps=(state)=>({
        category:state.getIn(["mall","category"])
})
export default connect(MapStateToProps)(Goods)

