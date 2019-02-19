import React,{Component} from 'react'
import {connect} from 'react-redux'
import {withRouter } from 'react-router-dom';
import action from "../../../../store/action";
import '../../move.css'
import Header_d from '../../../header/index'
import BScroll from 'better-scroll'
class Move_actorlist_d extends Component{
    render (){
        let {peopleType}=this.props;
        console.log(peopleType);
        return (
            <div className="move_actorlist_d">
                    <div className="move_actorlist_scroll_d" ref="move_actorlist_scroll_d">
                    <div className="move_active_ul_d">
                        {
                            peopleType.length>0? <ul>
                                {
                                    peopleType.map((item,index)=>{
                                        return <div key={index}>
                                            <p className="move_actorlist_type_d">{item.typeName}</p>
                                            <ul>
                                                {
                                                    item.persons.map((ite,ind)=>{
                                                        return <li key={ind} className="move_actorlist_li_d">
                                                            <img src={ite.image} alt=""/>
                                                            <div>
                                                                <p className="nameC_d">
                                                                    {ite.name}
                                                                </p>
                                                                <p className="nameE_d">
                                                                    {ite.nameEn}
                                                                </p>
                                                            </div>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    })
                                }
                            </ul>:""
                        }
                    </div>
                </div>
            </div>
        )
    }
    actorList_goback(){
        this.props.history.goBack();
    }
    componentDidMount(){
        this.props.getMoveActor_d();
        let box=this.refs.move_actorlist_scroll_d;
        var bScroll=new BScroll(box,{
            click:true
        })
        console.log(bScroll)
    }
}
const mapStateToProps=(state)=>({
    peopleType:state.toJS().move_d.peopleType
})
const mapDispatchToProps=(dispatch)=>({
    getMoveActor_d(){
        console.log(this);
        dispatch(action.getMoveActor_d(this.match.params.id))
    }
})
export default withRouter(Header_d(withRouter(connect(mapStateToProps,mapDispatchToProps)(Move_actorlist_d))))