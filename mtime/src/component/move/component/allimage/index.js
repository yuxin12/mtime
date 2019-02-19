import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../../move.css'
import {withRouter } from 'react-router-dom';
import action from "../../../../store/action";
import BScroll from 'better-scroll'
import Header_all_d from '../../../header/index'
class ImageList_d extends Component{
    render (){
        let {allImage_d}=this.props;
        console.log(allImage_d)
        return (
            <div className="ImageList_d">
                <div className="ImageList_box_d" ref="ImageList_box_d">
                    <div className="ImageList_scroll_d">
                        {
                            allImage_d.length>0?<ul className="ImageList_ul_d">
                                {
                                    allImage_d.map((item,index)=>{
                                        return <li className="ImageList_li_d" key={index}>
                                            <img src={item.image} alt=""/>
                                        </li>
                                    })
                                }
                            </ul>:""
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getAllImage_d()
        let box=this.refs.ImageList_box_d;
        var bScroll=new BScroll(box,{
            click:true
        })
        console.log(bScroll)
    }
    imageList_goback(){
        this.props.history.goBack(-1);
    }
}
const mapStateToProps=(state)=>({
    allImage_d:state.toJS().move_d.allImage_d
})
const mapDispatchToProps=(dispatch)=>({
    getAllImage_d(){
        dispatch(action.getAllImage_d(this.match.params.id))
    }
})
export default withRouter(Header_all_d(withRouter(connect(mapStateToProps,mapDispatchToProps)(ImageList_d))))