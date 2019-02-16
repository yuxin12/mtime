import {fetch as fetchDafault} from 'whatwg-fetch'
let gethotMovesList_details_d = (id)=>{
    let action=(value)=>({
        type:"GETHOTMOVESLIST_D",
        value:value
    })
    return (dispatch)=>{
        fetchDafault("/api/Service/callback.mi/movie/Detail.api?movieId="+id+"&locationId=292&t=201921511244270258")
            .then(res=>res.json())
            .then((data)=>{
                console.log(data);
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
                console.log(data);
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
let getAllContent_d=()=>{
    console.log(12312432)
    let action=(value)=>({
        type:"GETALLCONTENT_D",
        value:value
    })
    return (dispatch)=>{
        fetchDafault("/api/Service/callback.mi/Movie/HotLongComments.api?movieId=230385&pageIndex=1&t=201921521371099240")
            .then(res=>res.json())
            .then((data)=>{
                console.log(data.comments,"data");
                dispatch(action(data.comments))
            })
    }
}
export default {
    gethotMovesList_details_d,
    getMoveActor_d,
    getAllImage_d,
    getAllContent_d
}