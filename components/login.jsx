import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  justify-items: center;
`

const Tagline = styled.p`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 8px 0;

  .bold {
    font-weight: 600;
  }
`

const Screenshot = styled.img`
  max-height: 500px;
  max-width: 80vw;
  box-shadow: 0 1px 8px 1px rgba(0,0,0,0.2);
  margin: 50px 0 15px 0;
  border-radius: 8px;
  overflow: hidden;
`

const GreenButton = styled.a`
  color: #fff;
  display: inline-block;
  font-size: 1rem;
  background-color: ${props => props.theme.theme.colors.spotifyGreen};
  border: 0;
  border-radius: 50px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 30px;
  margin: 15px auto 15px auto;
  letter-spacing: 1.5px;
  font-weight: 600;
  vertical-align: middle;
  box-shadow: 0 1px 5px 1px rgba(0,0,0,0.1);

  &:hover {
    background-color: $spotify-button-border;
  }
`

const Login = () => {
  return(
    <Container>
      <Screenshot src='/mytop50.gif' />
      <Tagline><span className='bold'>MyTop50</span> allows you to view your top Spotify 
        <span className='bold'> artists</span> and <span className='bold'>tracks </span> 
        over different periods of time. 
      </Tagline>
      <Tagline>
        You can also save your top tracks as a playlist. 
      </Tagline>
        <GreenButton href='/login' >Connect With Spotify</GreenButton>
    </Container>
  )
}

export default Login