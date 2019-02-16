import React,{Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Move_header_d from './component/header'
import Moves_banner_d from './component/banner'
import action from '../../store/action'
import Moves_jieshao_d from './component/jieshao'
import Move_active_d from './component/actiors'
import All_image_d from './component/allImage_d'
import Move_content_d from './component/content_d'
import './move.css'
import BScroll from 'better-scroll'
class Moves_d extends Component{
    render (){
        let {moveDetail_d} = this.props;
        return (
            <div className="hotMovesList_details_d">
                <Move_header_d/>
                <div className="hotMovesList_details_main_d" ref="hotMovesList_details_main_d">
                    <div className="hotMovesList_scroll_d">
                        <Moves_banner_d/>
                        <Moves_jieshao_d/>
                        <Move_active_d/>
                        <All_image_d/>
                        <Move_content_d/>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.gethotMovesList_details_d()
        this.props.getMoveActor_d();
        this.props.getAllImage_d();
        this.props.getAllContent_d()
        let box=this.refs.hotMovesList_details_main_d;
        var bScroll=new BScroll(box,{
            click:true
        })
        console.log(bScroll)
    }
}
const mapStateToProps=(state)=>({
    moveDetail_d:state.toJS().move_d.moveDetail_d,
})
const mapDispatchToProps=(dispatch)=>({
    gethotMovesList_details_d(){
        dispatch(action.gethotMovesList_details_d(this.match.params.id))
    },
    getMoveActor_d(){
        dispatch(action.getMoveActor_d(this.match.params.id))
    },
    getAllImage_d(){
        dispatch(action.getAllImage_d(this.match.params.id))
    },
    getAllContent_d(){
        dispatch(action.getAllContent_d(this.match.params.id))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Moves_d)