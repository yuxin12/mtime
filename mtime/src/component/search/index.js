import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import action from '../../store/action/index'
import HeaderSearch_d from './component/header'
import Search_banner_d from './component/banner'
import Search_hotsearch_d from './component/hotsearch'
import Search_history_d from './component/searchHistory'
import Search_moves_d from './component/searchresults'
import BScroll from 'better-scroll'
class Search extends Component{
    render (){
        let {searchmove_d,searchInputVal_d}=this.props
        console.log(searchmove_d)
        return (
            <div className="search_d">
               <HeaderSearch_d/>
               <div className="search_main_d" ref="search_main_d">
                   <div className="search_main_scroll_d">
                        <Search_banner_d/>
                       {
                           searchmove_d.length>0?"":<Search_hotsearch_d/>
                       }
                       {
                           searchmove_d.length>0?"": <Search_history_d/>
                       }
                       <Link to="/" className="search_in_mall">
                           在商城中搜索{searchInputVal_d}</Link>
                        <Search_moves_d/>
                       {
                           searchmove_d.length>0?"":<div className="more"></div>
                       }
                   </div>
               </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getSearchBanner()
    }
    componentDidUpdate(){
        console.log(121312)
        if(!this.scroll) {
            this.scroll = new BScroll(this.refs.search_main_d, {
                click:true,
            });
           console.log(this.scroll,"hahahha")
        }
    }
}
const mapStateToProps=(state)=>({
    searchmove_d:state.toJS().search.searchmove_d,
    searchInputVal_d:state.toJS().search.searchInputVal_d
})
const mapDispatchToProps=(dispatch)=>({
    getSearchBanner(){
        dispatch(action.getSearchBanner())
        dispatch(action.getSearchKyeWord())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Search)