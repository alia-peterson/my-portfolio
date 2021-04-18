import { useThemeContext } from '../context/theme-context'

export default function ThemeButton() {
  const { active, setActive } = useThemeContext()

  const handleClick = () => {
    const body = document.querySelector('body')
    if (body.classList.contains('light')) {
      body.classList.remove('light')

    } else {
      body.classList.add('light')
    }

    setActive(!active)
  }

  return (
    <button onClick={handleClick}>
      hi
    </button>
  )
}
