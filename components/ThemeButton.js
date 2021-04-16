import { useThemeContext } from '../context/theme-context'

export default function ThemeButton() {
  const { active, setActive } = useThemeContext()

  return (
    <button onClick={() => setActive(!active)}>
      hi
    </button>
  )
}
