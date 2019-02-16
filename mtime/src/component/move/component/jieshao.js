import React,{Component} from 'react'
import action from "../../../store/action";
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { Collapse,Icon} from 'antd';
import '../move.css'
const Panel = Collapse.Panel;
class Jieshao extends Component{
    render(){
        let {moveDetail_d} = this.props;
        return (
            <div className="jieshao">
                <div className="jieshao_d"><span>“</span>{moveDetail_d.commonSpecial}</div>
                <button className="search_move_d">查影询/购票</button>
                <Collapse>
                    <Panel header="详细信息">
                        <Icon type="caret-down" className={"down_d"} theme="outlined" />
                        <p>{moveDetail_d.content}</p>
                    </Panel>
                </Collapse>,
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    moveDetail_d:state.toJS().move_d.moveDetail_d
})
const mapDispatchToProps=(dispatch)=>({
    gethotMovesList_details_d(){
        dispatch(action.gethotMovesList_details_d(this.match.params.id))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Jieshao)