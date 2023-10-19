import { useState } from 'react';
import s from './Todo.module.css';
import { TodoList } from './todo.types';


type InputFieldProps = {
  setTodoList: React.Dispatch<React.SetStateAction<TodoList>>
}

export const InputField = ({ setTodoList }: InputFieldProps) => {
  const [todoText, setTodoText] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTodoList(prevTodo => {
      const newTodo = [
        ...prevTodo,
        { id: crypto.randomUUID(), todoText: todoText, isCompleted: false }
      ]

      localStorage.setItem('todo', JSON.stringify(newTodo));

      return newTodo
    })

    setTodoText('');
  }

  return (
    <form onSubmit={e => { handleSubmit(e) }}>
      <div className={s.newTodo}>
        <input
          type="text"
          value={todoText}
          onChange={e => { handleChange(e) }}
          className={s.inputField}
        />
        <button className={s.addBtn}>+</button>
      </div>
    </form>
  )
}
