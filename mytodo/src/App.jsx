import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useState } from "react";


function App() {

  //for input we use states so that user can input
  const[todos, setTodos] = useState([
    "Go to the gym",
    "Eat more fruits"
  ])

  // we need to update the value of the variable using setTodos
  function updateTodo (newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }
  
  return (
    <>
      <TodoInput />
      <TodoList todos = {todos}/>
    </>
  )
}

export default App
