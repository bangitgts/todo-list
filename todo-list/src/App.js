import './App.css';
import { Component } from 'react';
import ToDo from './todo/ToDo';

class App extends Component{
  constructor(){
    super();
    this.todoItems = [
      {title:"Do your house Work",isComplete: true},
      {title:"Do your code"},
      {title:"Play game"}
    ];
  }
  render(){
    if(this.todoItems.length>0){
      return(
        <div className="App">
          {
            this.todoItems.map((item,index) => 
            <ToDo key={index} item= {item} />)
          }
        </div>
      )
    }
    else{
      return(
        <div className="App">
        NotthingHere
        </div>
      )
    }
   
  }

}
export default App;
