import s from './Todo.module.css'
import { TodoList } from './todo.types'

type TodoTasksProp = {
  todoList: TodoList
  setTodoList: React.Dispatch<React.SetStateAction<TodoList>>
}

export const TodoTasks = ({ todoList, setTodoList }: TodoTasksProp) => {
  function handleItemCheck(id: string) {
    setTodoList((prevTodo): TodoList => {
      return prevTodo.map(todo => {
        return {
          ...todo,
          isCompleted: todo.id === id ? !todo.isCompleted : todo.isCompleted
        }
      })
    })
  }

  function removeTodo(id: string) {
    setTodoList((prevTodo): TodoList => {
      const newTodo = prevTodo.filter(todo => todo.id !== id);
      localStorage.setItem('todo', JSON.stringify(newTodo));
      return newTodo;
    })
  }

  function removeAll() {
    setTodoList([]);
    localStorage.setItem('todo', '');
  }
  
  return (
    <div className={s.todoList}>
      <div className={s.todoTopSection}>
        <h1 className={s.todoTitle}>List</h1>
        <button className={s.todoClearBtn} onClick={removeAll}>Remove all</button>
      </div>
      <div className={s.todoContent}>
        {todoList.map(todo => {
          return (
            <div key={todo.id} className={s.todoItem}>
              <label htmlFor={todo.id} className={s.checkItem}>
                <input
                  id={todo.id}
                  className={s.checkbox}
                  type="checkbox"
                  onChange={() => { handleItemCheck(todo.id) }}
                  checked={todo.isCompleted}
                />
                <p>{todo.todoText}</p>
              </label>
              <button className={s.deleteTaskBtn} onClick={() => { removeTodo(todo.id) }}>X</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
