import { useFetch } from "../hooks/useFetch"

const UserList = () => {
  const { data, loading } = useFetch('https://dummyjson.com/users')

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>{user.firstName} {user.lastName}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList