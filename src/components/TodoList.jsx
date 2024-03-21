import { useFetch } from '../hooks/useFetch'

const TodoList = () => {
  const { data, loading } = useFetch('https://dummyjson.com/todos')
  
  if (loading) return <div>Loading...</div>

  return (
    <div>
      <ul>
        {data.todos.map(todoItem => (
          <li key={todoItem.id}>{todoItem.todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList