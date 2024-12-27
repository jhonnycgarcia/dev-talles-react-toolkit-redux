import { useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {
  const { data: todos = [], isLoading, error } = useGetTodosQuery();
  return (
    <>
      <h1>Todo App - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>
              <strong>{todo.completed ? '✅' : '⬜️'}</strong>
              {todo.title}
            </li>
          ))
        }
      </ul>
      <button>Next Todo</button>
    </>
  )
}
