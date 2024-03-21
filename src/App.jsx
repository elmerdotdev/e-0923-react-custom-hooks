import LoginForm from "./components/LoginForm"
import ProductList from "./components/ProductList"
import Profile from "./components/Profile"
import ThemeSetting from "./components/ThemeSetting"
import TodoList from "./components/TodoList"
import UserList from "./components/UserList"

const App = () => {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
      <h2>Profile</h2>
      <Profile />
      <h2>Theme</h2>
      <ThemeSetting />
      <h2>To Dos</h2>
      <TodoList />
      <h2>Products</h2>
      <ProductList />
      <h2>Users</h2>
      <UserList />
    </div>
  )
}

export default App