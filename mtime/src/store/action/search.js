import {fetch as fetchDafault} from 'whatwg-fetch'
import store from '../index'
let getSearchBanner=()=>{
    let action=(value)=>({
        type:"GETSEARCHBANNER_D",
        value:value
    })
    return (dispatch)=>{
        fetchDafault("/api/Service/callback.mi/Advertisement/MobileAdvertisementInfo.api?locationId=290&t=201921617175410691")
            .then(res=>res.json())
            .then((data)=>{
                dispatch(action(data.advList))
            })
    }
}
let getSearchKyeWord=()=>{
    let action=(value)=>({
        type:"GETSEARCHKEYWORD",
        value:value
    })
    return (dispatch)=>{
        fetchDafault("/api/Service/callback.mi/Search/HotKeyWords.api?t=201921814535054492")
            .then(res=>res.json())
            .then((data)=>{
                dispatch(action(data.keywords))
            })
    }
}
let searchMoves =()=>{
    let keyword=store.getState().toJS().search.searchInputVal_d;
    let action=(value)=>({
        type:"SEARCHMOVES_D",
        value:value
    })
    return (dispatch)=> {
        fetchDafault("/api/Service/callback.mi/Search/SearchSuggestionNew.api", {
            method: "POST",
            body:"keyword="+keyword+"&t="+201921821412767277+"&locationId: 290="+290,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        }).then(res=>res.json())
            .then(data=>{
                console.log(data.suggestions)
                if(data.suggestions){
                    data.suggestions=data.suggestions
                }
                else{
                    data.suggestions=[]
                }
                dispatch(action(data.suggestions))
            })
    }
}
let changeInputVal_d=(keyword)=>{
    let action=(value)=>({
        type:"CHANGEINPUTVAL",
        value:keyword,
    })
    return (dispatch)=>{
        dispatch(action())
    }
}
export default {
    getSearchBanner,
    getSearchKyeWord,
    changeInputVal_d,
    searchMoves
}