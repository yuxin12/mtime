import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
class Hotmoves_d extends Component{
    render(){
        let movesLen_d=this.props.hotMovesList.length
        return (
            <div className="hotMoves">
                <NavLink to="/search/id=1">
                    <span className="hotMoves_a">正在热映({movesLen_d}部)</span>
                    <span className="hotMoves_b">></span>
                </NavLink>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    hotMovesList:state.toJS().home.hotMovesList
})
const mapDispatchToProps=(dispatch)=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(Hotmoves_d)