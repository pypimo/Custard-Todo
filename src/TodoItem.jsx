export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
  return ( 
    <li>
      <label>
        <input 
          type="checkbox" 
          completed={completed} 
          onChange={e=> toggleTodo(id, e.target.checked)} 
        />
        {title}
      </label>
      <button 
        onClick={e => {deleteTodo(id)}}
        className="btn btn-danger"
      >
        Delete
      </button>   
    </li>
  )
}