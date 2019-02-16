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
                console.log(data.ms);
                dispatch(action(data.ms))
            })
    }
}
export default {
    getNowMoves
}