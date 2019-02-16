import React,{Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
class Moves_banner_d extends Component{
    render (){
        let {moveDetail_d} =this.props
        return (
            <div className="moves_banner_d">
                <div className="moves_banner_top_d"></div>
                <div className="moves_banner_img_d">
                    <img src={moveDetail_d.image} alt=""/>
                </div>
                <div className="moves_banner_title_d">
                    <h2 className="moves_banner_titleCn_d">{moveDetail_d.titleCn}</h2>
                    <h3 className="moves_banner_titleEn_d">{moveDetail_d.titleEn}</h3>
                    <p className="moves_banner_runTime_d">{moveDetail_d.runTime}</p>
                    <p className="moves_banner_type_d">{moveDetail_d.type}</p>
                    <div className="moves_banner_rating_d">{moveDetail_d.rating}</div>
                    <p className="want_btn_d">
                        <button className="want_look_d">我想看</button>
                        <button className="want_rating_d">我想评分</button>
                    </p>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    moveDetail_d:state.toJS().move_d.moveDetail_d
})
const mapDispatchToProps=(dispatch)=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(Moves_banner_d)