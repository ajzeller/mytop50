import styled from 'styled-components'
import { IoLogoGithub } from "react-icons/io";


const FooterContainer = styled.div`
  display: grid;
  color: ${props => props.theme.theme.text.primary};
  width: 100%;
  background-color: ${props => props.theme.theme.bg.primary};
  border-top: 1px solid ${props => props.theme.theme.border.secondary};
`

const FooterInner = styled.footer`
  margin: auto;
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  /* max-width: ${props => props.theme.theme.contentWidths[0]}; */
  
  a {
    color: ${props => props.theme.theme.text.primary};
    text-decoration: none;
  }

  .underline{
    border-bottom: 3px solid ${props => props.theme.theme.border.secondary};
  }
`

const Footer = () => {
  return(
    <FooterContainer>
      <FooterInner>
        <span>
          Made by <a href='https://zeller.io' target="_blank" className='underline'>Andrew Zeller</a>
        </span>
        <a href='https://github.com/ajzeller/mytop50' target="_blank">
          <IoLogoGithub size={24}/>
        </a>
      </FooterInner>
    </FooterContainer>
  )
}

export default Footer