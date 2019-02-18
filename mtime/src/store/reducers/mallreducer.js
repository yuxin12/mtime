import Immutable from 'immutable'
const MallDefaultState=Immutable.fromJS({
    scrollImg: [],
    navigatorIcon: [],
    cellA: {},
    cellB: {},
    cellC: {},
    topic:[],
    category:[],
    adsGoodsindex:0,
    recommendsgoodslist:[],
    selectTopics:[],
    selectgoodslist:[],
    selectCategoryList:[]
})
export default (state = MallDefaultState, action) => {
    // console.log(action,"mall")
    switch (action.type) {
        case "MARKET_IMGS":
                    let data = action.data
                    let newState = state.set("scrollImg", data.scrollImg);
                    let newState1 = newState.set("navigatorIcon", data.navigatorIcon);
                    let newState2 = newState1.set("cellA", data.cellA);
                    let newState3 = newState2.set("cellB", data.cellB);
                    let newState4 = newState3.set("cellC", data.cellC);
                    let newState5 = newState4.set("topic", data.topic);
                    let newState6 = newState5.set("category", data.category);
                    return newState6;
        case "CHANGE_GOODS_INDEX":
                    let newState7 = state.updateIn(["adsGoodsindex"],(index)=>index=action.index);
                    console.log(newState7);
                    return newState7;
        case "RECOMMEND_GOODS":
                    let RecommendGoodsState = state.updateIn(["recommendsgoodslist"],list=>{
                            let newlist = [...action.data.goodsList,...list];
                        return newlist;
                    });
                    return RecommendGoodsState;
        case "SELECT_GOODS":
                    let selectState1 = state.updateIn(["selectTopics"],slist=>{
                        let newslist =[...action.data.topics,...slist];
                        return newslist;
                    })
                    let selectState2 = selectState1.updateIn(["selectCategoryList"],sclist=>{
                        let newlist2 = [...action.data.content.category.categoryList,...sclist];
                        return newlist2;
                    })
                    let selectState3 = selectState2.updateIn(["selectgoodslist"],sgoods=>{
                        let newlist3 = [...action.data.content.goods.goodsList,...sgoods];
                        return newlist3;
                    })
                    // console.log(selectState3.get("selectTopics"));
                    return selectState3;
        case "GET_SEARCH_GOODS":
                    let searchGoodsState = state.updateIn(["selectgoodslist"],sgoods=>{
                        sgoods = action.data.goodsList;
                        return sgoods;
                    })
                    return searchGoodsState;
    }
    return state;
}
