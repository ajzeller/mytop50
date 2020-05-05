import styled from 'styled-components'
import { IoLogoGithub } from "react-icons/io";


const FooterContainer = styled.div`
  display: grid;
  color: ${props => props.theme.theme.text.primary};
  width: 100%;
  background-color: ${props => props.theme.theme.bg.primary};
  border-top: 1px solid ${props => props.theme.theme.border.secondary};
  box-sizing: border-box;
`

const FooterInner = styled.footer`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
  grid-gap: 20px;
  box-sizing: border-box;
  /* justify-items: center; */
  justify-content: space-between;
  align-content: flex-start;
  align-items: flex-start;
  /* max-width: ${props => props.theme.theme.contentWidths[0]}; */
  
  a {
    color: ${props => props.theme.theme.text.primary};
    text-decoration: none;
  }

  .underline{
    border-bottom: 3px solid ${props => props.theme.theme.border.secondary};
  }
`

const ArticlesContainer = styled.div`
  display: grid;
  grid-gap: 8px;
`

const MadeByContainer = styled.div`
  display: grid;
  /* align-items: center; */
  grid-template-columns: auto auto;
  grid-gap: 8px;
`

const Footer = () => {
  return(
    <FooterContainer>
      <FooterInner>
        <ArticlesContainer>
          <a href="/">Home</a>
          <span><strong>Articles</strong></span>
          <a href="/how-to-view-your-listening-history">How to view your Spotify listening history</a>
          <a href="/how-to-view-your-most-played-song-on-spotify">How to view your most played song on Spotify</a>
          <a href="/how-to-view-your-most-played-artist-on-spotify">How to view your most played artist on Spotify</a>
        </ArticlesContainer>

        <MadeByContainer>
          <span>
            Made by <a href='https://zeller.io' target="_blank" className='underline'>Andrew Zeller</a>
          </span>
          <a href='https://github.com/ajzeller/mytop50' target="_blank">
            <IoLogoGithub size={24}/>
          </a>
        </MadeByContainer>

      </FooterInner>
    </FooterContainer>
  )
}

export default Footer