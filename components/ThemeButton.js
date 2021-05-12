import { useThemeContext } from '../context/theme-context'
import Image from 'next/image'

export default function ThemeButton() {
  const { active, setActive } = useThemeContext()

  const handleClick = () => {
    const body = document.querySelector('body')
    
    if (body.classList.contains('dark')) {
      body.classList.remove('dark')

    } else {
      body.classList.add('dark')
    }

    setActive(!active)
  }

  return (
    <button onClick={handleClick}>
      <Image src='/images/skull.png' alt='toggle theme' height={30} width={30} />
    </button>
  )
}
