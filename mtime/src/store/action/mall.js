import { fetch } from 'whatwg-fetch';

const getData = () => {
    let action = (data) => ({
        type: "MARKET_IMGS",
        data:data
    })
    return (dispatch) => {
        let url = "/api/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=201921420565554025";
        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {
            // console.log(data);
            dispatch(action(data))
        })
    }
}
const ChangeGoodsIndex=(dispatch,index)=>{
    dispatch({
        type:"CHANGE_GOODS_INDEX",
        index:index
    })
}

const GetRecommend=()=>{
    let action = (data) => ({
        type: "RECOMMEND_GOODS",
        data:data
    })
   return (dispatch)=>{
       let url = "/api/Service/callback.mi/ECommerce/RecommendProducts.api?t=201921611161845392&goodsIds=&pageIndex=1"
        fetch(url).then(response=>response.json())
        .then(data=>{
            console.log(data)
            dispatch(action(data));
        })
   }
}

const getSelections=()=>{
    let action = (data) => ({
        type: "SELECT_GOODS",
        data:data
    })
   return (dispatch)=>{
       let url = "/api/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=0&sm=2&topicId=0&movieId=0&roleId=0&categoryId1=25&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=4C968F6339B25F9D6467861921B0DA10&t=201921619353843520"
        fetch(url).then(response=>response.json())
        .then(data=>{
            // console.log(data)
            dispatch(action(data));
        })
   }
}

const getSearchGoods=(obj)=>{
    console.log(obj)
    let action = (data) => ({
        type: "GET_SEARCH_GOODS",
        data:data
    })
   return (dispatch)=>{
       let url = "/api/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=0&sm=2&topicId="+obj.topicId+"&movieId=0&roleId=0&categoryId1="+obj.categoryId1+"&categoryId2="+obj.categoryId2+"&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=4C968F6339B25F9D6467861921B0DA10&t=201921619353843520"
        fetch(url).then(response=>response.json())
        .then(data=>{
            console.log(data,url)
            dispatch(action(data.content.goods));
        })
   }
}




export default {
    getData,
    ChangeGoodsIndex,
    GetRecommend,
    getSelections,
    getSearchGoods
}