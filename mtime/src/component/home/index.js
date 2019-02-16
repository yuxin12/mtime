import React,{Component} from 'react'
import {connect} from 'react-redux'
import action from '../../store/action/index'
import Header_d from './component/header'
import Banner_d from './component/banner'
import Hotmoves from './component/hotMoves'
import Hotmoveslist_d from './component/hotmovelist'
import Aav_d from './component/adv'
import Hotpoint_d from './component/hotPoint'
import BScroll from 'better-scroll'

class Home extends Component{
    render(){
        return (
            <div className="home">
                <Header_d></Header_d>
                <div className="home_main" ref="box_d">
                    <div className="scroll_d">
                        <Banner_d/>
                        <Hotmoves/>
                        <Hotmoveslist_d/>
                        <Aav_d/>
                        <Hotpoint_d/>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getNowMoves_d();
        this.props.getAdv_d()
        this.props.gethotPoints_d()
        let box=this.refs.box_d;
        var bScroll=new BScroll(box,{
            click:true
        })
    }
}
const mapStateToProps=(state)=>({

})
const mapDispatchToProps=(dispatch)=>({
    getNowMoves_d(){
        dispatch(action.getNowMoves())
    },
    getAdv_d(){
      dispatch(action.getAdv_d())
    },
    gethotPoints_d(){
        dispatch(action.gethotPoints_d())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)