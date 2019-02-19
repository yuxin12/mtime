import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../search.css'
import {withRouter } from 'react-router-dom';
import action from '../../../store/action/index';
class Search_results_d extends Component{
    render (){
        let {searchmove_d}=this.props
        return (
            <div className="search_results_d">
                <ul>
                    {
                        searchmove_d.map((item,index)=>{
                            return <li className="search_results_li_d" key={index}>
                                <div className="search_results_div_d">
                                    <img src={item.cover} alt=""/>
                                </div>
                                <div className="search_results_title_d">
                                    <h2><span>{item.titlecn}</span><span>({item.year})</span><span>【{item.contentType}】</span></h2>
                                    <h3>{item.titleen}</h3>
                                    <h3>
                                        <span>{item.contentType}</span>
                                        <span>,</span>
                                        <span>{item.movieType}</span>
                                    </h3>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
    goback(){
        this.props.history.goBack(-1);
    }
}
const mapStateToProps=(state)=>({
    searchmove_d:state.toJS().search.searchmove_d
})
const mapDispatchToProps=(dispatch)=>({

})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Search_results_d))