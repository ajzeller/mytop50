import styled from 'styled-components'
import useDarkMode from 'use-dark-mode'
import Toggle from 'react-toggle'
import '../assets/ToggleStyle.scss'
import { FiMoon, FiSun } from "react-icons/fi"

const Toggler = () => {
  const darkMode = useDarkMode(false)
  const theme = darkMode.value ? 'dark' : 'light'

  // console.log(theme)

  return(
    <Toggle
          defaultChecked={darkMode.value}
          onChange={darkMode.toggle} 
          icons={{
            checked: <FiSun />,
            unchecked: <FiMoon />
          }}
          />
  )
  
}

export default Toggler