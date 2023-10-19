import { useEffect, useState } from 'react'
import './App.css'
import { InputField } from './components/InputField'
import { TodoList } from './components/todo.types';
import { TodoTasks } from './components/TodoTasks'

function App() {
  const [todoList, setTodoList] = useState<TodoList>([]);

  useEffect(() => {
    const data = localStorage.getItem('todo');

    if (data) {
      setTodoList(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    if (todoList.length > 0) {
      localStorage.setItem('todo', JSON.stringify(todoList));
    }
  }, [todoList])

  return (
    <section className='todo'>
      <InputField setTodoList={setTodoList} />
      <TodoTasks todoList={todoList} setTodoList={setTodoList} />
    </section>
  )
}

export default App
