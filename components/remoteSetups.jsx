import styled from 'styled-components'

const AdPanel = styled.div`
  margin: 50px 0 0 0;
  border: 2px solid ${props => props.theme.theme.border.secondary}; 
  padding: 10px 30px;
  border-radius: 15px;

  a {
    color: ${props => props.theme.theme.colors.spotifyBlue}; 
  }
`

const Container = styled.div`
  display: grid;
  justify-items: center;
`

const RemoteSetups = () => {

  return(
    <Container>
      <AdPanel>
        Listening and working from home? Checkout my other project, <a href="https://remotesetups.com" target="_blank">RemoteSetups.com</a> for desk setup inspiration, gear lists, and tips.
      </AdPanel>
    </Container>
  )
  
}

export default RemoteSetups