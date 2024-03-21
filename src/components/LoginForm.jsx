import { useFormInput } from "../hooks/useFormInput"

const LoginForm = () => {
  const username = useFormInput('')
  const password = useFormInput('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Username: ${username.value} - Password: ${password.value}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Username:</label>
          <input type="text" value={username.value} onChange={username.onChange} />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input type="password" value={password.value} onChange={password.onChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm