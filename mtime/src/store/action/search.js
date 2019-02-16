import {fetch as fetchDafault} from 'whatwg-fetch'
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
    getHotPointDetail
}