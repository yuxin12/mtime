import {fetch as fetchDafault} from 'whatwg-fetch'
import store from "../index"

let gethotMovesList_details_d = (id)=>{
    let action=(value)=>({
        type:"GETHOTMOVESLIST_D",
        value:value
    })
    return (dispatch)=>{
        fetchDafault("/api/Service/callback.mi/movie/Detail.api?movieId="+id+"&locationId=292&t=201921511244270258")
            .then(res=>res.json())
            .then((data)=>{
                dispatch(action(data))
            })
    }
}
let getMoveActor_d=(id)=>{
    let action=(value)=>({
        type:"GETMOVEACTOER",
        value:value
    })
    return (dispatch)=>{
        fetchDafault("/api/Service/callback.mi/Movie/MovieCreditsWithTypes.api?movieId="+id+"&t=201921517161474871")
            .then(res=>res.json())
            .then((data)=>{
                dispatch(action(data.types))
            })
    }
}
let getAllImage_d=()=>{
    let action=(value)=>({
        type:"GETALLIMAGE_D",
        value:value
    })
    return (dispatch)=>{
        fetchDafault("/api/Service/callback.mi/movie/Image.api?movieId=230385&t=201921520212248345")
            .then(res=>res.json())
            .then((data)=>{
                dispatch(action(data))
            })
    }
}
let getAllContent_d=(id)=>{
    let mm=store.getState().toJS().move_d.allCommentsIndex
    let action=(value)=>({
        type:"GETALLCONTENT_D",
        value:value
    })
        return (dispatch)=>{
            fetchDafault("/api/Service/callback.mi/Movie/HotLongComments.api?movieId="+id+"&pageIndex="+mm+"&t=201921521371099240")
                .then(res=>res.json())
                .then((data)=>{
                    dispatch(action(data))
                })
        }
}
let getAllContentone_d=(id)=>{
    let action=(value)=>({
        type:"GETALLCONTENTONE_D",
        value:value
    })
    return (dispatch)=>{
        fetchDafault("/api/Service/callback.mi/Movie/HotLongComments.api?movieId="+id+"&pageIndex=1&t=201921521371099240")
            .then(res=>res.json())
            .then((data)=>{
                dispatch(action(data))
            })
    }
}
let getAllShortContent_d=(id)=>{
    let action=(value)=>({
        type:"GETALLSHORTCONTENT_D",
        value:value
    })
    return (dispatch)=>{
        fetchDafault("/api/Service/callback.mi/Showtime/MovieComments.api?movieId="+id+"&pageIndex=1&t=201921614493260419")
            .then(res=>res.json())
            .then((data)=>{
                dispatch(action(data.cts))
            })
    }
}
let resetContentList_d=()=>{
    let action=()=>({
        type:"RESETCONTENTLIST_D",
    })
    return (dispatch)=>{
        dispatch(action())
    }
}
export default {
    gethotMovesList_details_d,
    getMoveActor_d,
    getAllImage_d,
    getAllContent_d,
    getAllShortContent_d,
    resetContentList_d,
    getAllContentone_d
}