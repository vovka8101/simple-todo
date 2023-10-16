import s from './Todo.module.css'

export const Todo = () => {
  return (
    <div className={s.todoList}>
      <div className={s.todoTopSection}>
        <h1 className={s.todoTitle}>List</h1>
        <button className={s.todoClearBtn}>Clear</button>
      </div>
      <div className={s.todoContent}>
        what to do...
      </div>
    </div>
  )
}
