import { lightTheme, darkTheme } from '../assets/theme';
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'

export default ({ children }) => {
  let darkMode = useDarkMode(true)
  const theme = darkMode.value ? darkTheme : lightTheme
  darkMode = {...darkMode, theme} 

  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])
    
  const body = 
    <ThemeProvider theme={darkMode} toggleTheme={darkMode.toggle}>
      {children}
    </ThemeProvider>

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
      return <div style={{ visibility: 'hidden' }}>{body}</div>
  }

  return body
}