import styled from 'styled-components'

const Container = styled.div`
  max-width: 600px;
  /* max-width: ${props => props.theme.theme.contentWidths[0]}; */
  /* margin: 0px auto; */
  padding: 50px 15px;

  a {
    color: ${props => props.theme.theme.text.primary};
    text-decoration: none;
  }

  .underline{
    border-bottom: 3px solid ${props => props.theme.theme.border.secondary};
  }
`

const Post = (props) => {
  return(
    <Container>
      {props.children}
    </Container>
  )
}

export default Post