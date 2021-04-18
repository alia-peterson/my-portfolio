import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export function AppWrapper({ children }) {
  const [active, setActive] = useState(false)
  const value = { active, setActive }

  return (
    <ThemeContext.Provider value={ value }>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  return useContext(ThemeContext)
}
