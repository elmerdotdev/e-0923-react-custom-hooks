import { useLocalStorage } from "../hooks/useLocalStorage"

const Profile = () => {
  const [firstname, setFirstname] = useLocalStorage('firstname', 'John')

  const handleFirstname = () => {
    setFirstname('Joe')
  }

  return (
    <div>
      <h1>Hello, {firstname}</h1>
      <button onClick={handleFirstname}>Update firstname</button>
    </div>
  )
}

export default Profile