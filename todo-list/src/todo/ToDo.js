import React, { Component } from "react";
import './todo.css'
class ToDo extends Component{
    constructor(props){
        super(props);
        this.onItemClick = this.onItemClick.bind(this); 
    }
    onItemClick(){
        console.log(this.props.item);
    }
    render()
    {
        const {item} = this.props;
        let className = 'TodoItem';
        if(item.isComplete){
            className += " TodoItem-complete";
        }
        return(
            <div onClick={this.onItemClick} className={className}>
                <p>{this.props.item.title}</p>
            </div>
        )
    }
}
export default ToDo;