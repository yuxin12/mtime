import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../move.css'
import {withRouter } from 'react-router-dom';
class Move_active_d extends Component{
    render (){
        let {peopleType}=this.props;
        return (
            <div className="move_active_d">
                <div className="move_active_top_d" onClick={this.goActorList.bind(this)}>
                    {peopleType.length>0?<span className="move_active_one_d">{peopleType[1].persons.length}位演员</span> :""}
                    <i className="move_active_two_d iconfont">&#xe65c;</i>
                </div>
                <div className="move_active_bottom_d">
                    <ul>
                        {peopleType.length>0?peopleType[1].persons.map((item,index)=>{return <li key={index} className="move_active_bottom_actor_d">
                            <img src={item.image} alt=""/>
                            <p>{item.name}</p>
                        </li>}):""
                        }
                    </ul>
                </div>
            </div>
        )
    }
    goActorList(){
        this.props.history.push("/actorlist/"+this.props.match.params.id)
    }
}
const mapStateToProps=(state)=>{
    return {
        peopleType:state.toJS().move_d.peopleType
    }
}

const mapDispatchToProps=(dispatch)=>({

})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Move_active_d))