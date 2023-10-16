import { useState } from 'react'
import './App.css'
import { InputField } from './components/InputField'
import { TodoList } from './components/todo.types';
import { Todo } from './components/Todo'


function App() {
  const [todoList, setTodoList] = useState<TodoList>([]);

  return (
    <section className='todo'>
      <InputField setTodoList={setTodoList} />
      <Todo />
    </section>
  )
}

export default App
