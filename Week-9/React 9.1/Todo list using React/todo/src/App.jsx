import {useState} from "react";
import "./App.css";
export default function App(){
  const [todos,setTodos]=useState([
    {
      title:"Go to ysc",
      description:"Brisk walking",
      done:"true"
    }
  ]);
  function addTodo(){
    let newArray=[];
    for (let i = 0; i < todos.length; i++) {
      newArray.push(todos[i]);
    }
    newArray.push({
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      done: true,
    });
    setTodos(newArray);
  }
  return(<div>
    <input id="title" type="text" placeholder="title"></input>
    <input id="description" type="text" placeholder="description"></input>
    <br>
    </br>
    <button onClick={addTodo}>Add todo</button>
    {todos.map((todo)=>(
      <Todo title={todo.title} description={todo.description} done={todo.done} />
    ))}
  </div>
  );
}
function Todo(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{props.done?"Task is done":"Task is not done"}</h3>
    </div>
  );
}