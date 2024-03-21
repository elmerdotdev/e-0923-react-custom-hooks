import { useLocalStorage } from "../hooks/useLocalStorage"

const ThemeSetting = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div style={{ background: theme === 'light' ? 'white' : 'black', width: '200px', height: '200px', padding: '50px' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ThemeSetting