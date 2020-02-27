import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  justify-items: center;
`

const Tagline = styled.h1`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 400;

  .bold {
    font-weight: 600;
  }

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
  margin: 25px auto 15px auto;
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
      <Tagline>Your top <span className='bold'>artists</span> and <span className='bold'>tracks</span> over time.</Tagline>
        <GreenButton href='/login' >Connect With Spotify</GreenButton>
    </Container>
  )
}

export default Login