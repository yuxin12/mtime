import React,{Component} from 'react'
import {connect} from 'react-redux'
import {withRouter } from 'react-router-dom';
class All_image_d extends Component{
    render (){
        let {allImage_d}=this.props
        return (
            <div className="All_image_d">
                <p className="All_image_img_d" onClick={this.goImageList.bind(this)}>
                    <span>{allImage_d.length}张图片</span>
                    <i className="iconfont">&#xe65c;</i>
                </p>
                {
                    allImage_d.length>0?<ul className="All_image_img_ul_d">
                        {
                            allImage_d.map((item,index)=>{
                                if(index<4){
                                    return <li key={index} className="All_image_img_li_d">
                                        <img src={item.image} alt=""/>
                                    </li>
                                }
                            })
                        }
                    </ul>:""
                }
            </div>
        )
    }
    goImageList(){
        console.log(1234)
        this.props.history.push("/imagelist_d/"+this.props.match.params.id)
    }
}
const mapStateToProps=(state)=>{
    return {
        allImage_d:state.toJS().move_d.allImage_d
    }
}
const mapDispatchToProps=(dispatch)=>({

})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(All_image_d))