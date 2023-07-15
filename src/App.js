import "./App.css";
import Header from "./Mycomponents/Header";
import Footer from "./Mycomponents/Footer";
import {Todos} from "./Mycomponents/Todos";
import { useState,useEffect } from "react";
import { Addtodo } from "./Mycomponents/Addtodo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete =(todo) =>{
    console.log("i am on delete of todo",todo)

    setTodos(todos.filter((e)=>{
       return e!==todo
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addtodo = (title,desc) => {
    
     console.log("Hey i am adding a TODO ",title,desc)
     let SR;
      if(todos.length===0)
      {
        SR =0;
      }
      else{

        SR= todos[todos.length-1].SR+1;
      }
     const mytodo ={
      SR :SR,
      title :title,
      desc: desc
     }
     setTodos([...todos,mytodo]);
     console.log(mytodo);
   
    }
    const [todos, setTodos] = useState(initTodo)
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  

  


  return(
    <>
    <Router>
    <Header title=" MY TODO list" searchBar={false}/>
    
    <Addtodo addtodo={addtodo}/>
    <Todos todos={todos} onDelete ={onDelete}/>
    <Footer/>

    </Router>


    </>

);

}

export default App;
