import {fetch as fetchDafault} from 'whatwg-fetch'
let getNowMoves=()=>{
    let action=(value)=>({
        type:"GETNOWMOVES_D",
        value:value
    })
    return (dispatch)=>{
        fetchDafault("/api/Service/callback.mi/Showtime/LocationMovies.api?locationId=292&t=20192141715837770")
            .then(res=>res.json())
            .then((data)=>{
                dispatch(action(data.ms))
            })
    }
}
let getAdv_d=()=>{
    let action=(value)=>({
        type:"GETADV_D",
        value:value
    })
    return (dispatch)=>{
        fetchDafault("/api/Service/callback.mi/PageSubArea/MallAreaFirstH5Url.api?t=201921423191068399")
            .then(res=>res.json())
            .then((data)=>{
                dispatch(action(data.areaFirst))
            })
    }
}
let gethotPoints_d=()=>{
    let action=(value)=>({
        type:"GETHOT_POINT_D",
        value:value
    })
    return (dispatch)=>{
        fetchDafault("/api/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=20192142319105416")
            .then(res=>res.json())
            .then((data)=>{
                dispatch(action(data.hotPoints))
            })
    }
}
let getHotPointDetail=(id)=>{
    let action=(value)=>({
        type:"GETHOTPOINT_DETAILS",
        value:value
    })
    return (dispatch)=>{
        fetchDafault("/api/Service/callback.mi/News/Detail.api?newsId="+id+"&t=201921585373897")
            .then(res=>res.json())
            .then((data)=>{
                console.log(data);
                dispatch(action(data))
            })
    };
}
export default {
    getNowMoves,
    getAdv_d,
    gethotPoints_d,
    getHotPointDetail
}