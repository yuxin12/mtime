import React,{Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import '../home.css'
class HotMovesList_d extends Component{
    render (){
        let {hotMovesList}=this.props
        return (
            <div className="hotMovesList">
                <ul>
                    {
                        hotMovesList.map((item,index)=>{
                            if(index<=7){
                                return (
                                    <li key={index}>
                                        <NavLink to={"/move/"+item.id}>
                                            <img src={item.img} alt=""/>
                                            <p>{item.tCn}</p>
                                        </NavLink>
                                    </li>
                                )
                            }
                            else{
                                return;
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    hotMovesList:state.toJS().home.hotMovesList
})
const mapDispatchToProps=(dispatch)=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(HotMovesList_d)