import { useState } from "react"
import { useEffect } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import "./styles.css"

export default function App() {  

  const [todos, setTodos] = useState(() => {
    const localVal = localStorage.getItem("ITEMS")
    if (localVal==null) return []
    return JSON.parse(localVal)
  })  

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos)) //save todos items 
  }, [todos])

  function addTodo(title) {
    setTodos( (currentTodos => {
      return [
        ...currentTodos,
        {id:crypto.randomUUID(), title, completed:false}
      ] 
    })
    ) 
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id===id) {

          // todo.completed=completed //immutable type
          return {...todo, completed}
          //returning all properties of todo objects and changing the completed status
        }
        return todo //NEED to return
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id!=id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </>
  )
}
