import React from 'react';
import logo from './logoInPng.png';
import "./App.css";

class App extends React.Component{

    constructor(props){
      super(props);
      this.state={
        newItem:"",
        list:[]
      };
    }
    addItem(todoValue){
      if(todoValue !== "")
      {
        const newItem={
          id:Date.now(),
          value:todoValue,
          idDone:false
        };
        const list=[...this.state.list];
        list.push(newItem);

        this.setState({
          list,
          newItem:""
        });
      }
    }

   deleteItem(id){
     const list= [...this.state.list];
     const updatedlist= list.filter(item => item.id !== id);
     this.setState({list:updatedlist});
   }
   updateInput(input){
     this.setState({newItem:input});
   }

     render(){
       return(
         <div>
           <img src={logo} width="100" height="100" className="logo"/>
           <h1 className="app-title"> ToDo App</h1>
           <div className="container">
             <label>Add an Item...</label>
             <input
              text="text"
              classNamename="input-text"
              placeholder="Enter your item"
              value={this.state.newItem}
              onChange={e =>this.updateInput(e.target.value)}
              /> <br />
              <button
                className="add-btn"
                onClick={()=> this.addItem(this.state.newItem)}
                disabled={!this.state.newItem.length}
                >AddTodo </button>
                <div className="list">
                <ul>
                {this.state.list.map(item=> {
                   return(
                     <li key={item.id}>
                       <input
                       type="checkbox"
                       name="idDone"
                       checked={item.isDone}
                       onChange={()=>{}}
                       />
                       {item.value}
                       <button
                       className="btn"
                       onClick={()=>this.deleteItem(item.id)}
                       >Delete</button>

                     </li>
                   );
                })}

                </ul>
              </div>
           </div>
         </div>
       );
     }
}
export default App;
