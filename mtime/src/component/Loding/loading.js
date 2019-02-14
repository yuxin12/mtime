import React,{Component} from 'react'
import './loading.css'
class Loading extends Component{
    render(){
        return (
            <div className="loading">
                <i className="fa fa-spinner fa-pulse loading_img"></i>
            </div>
        )
    }
}
export default Loading