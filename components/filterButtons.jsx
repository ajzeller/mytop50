import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  padding: 15px 5px 5px 5px;
  margin: 0 0 10px 0;
  box-sizing: border-box;

  @media (min-width: 1000px){
    grid-template-columns: 1fr;
    margin: 0 0 20px 0;
  }
`

const RangeButtonsGrid = styled.div`
  display: grid;
  justify-self: left;
  justify-items: center;
  grid-template-columns: repeat(4, auto);
  background-color: ${props => props.theme.theme.bg.secondary};
  border-radius: 0px;
  box-shadow: 0 1px 5px 1px rgba(0,0,0,0.1);

  @media (min-width: 1000px){
    justify-self: center;
  }
`

const Button = styled.div`
  font-size: 0.65rem;
  padding: 5px 4px;
  text-transform: uppercase;

  &.selected, &:hover {
    border-bottom: 2px solid ${props => props.theme.theme.colors.spotifyGreen};
    border-radius: 0px;
    cursor: pointer;
  }

  @media (min-width: 1000px){
    font-size: 0.8rem;
    padding: 8px 15px;

  }
`

const ContentTypeButtonsGrid = styled.div`
  display: grid;
  justify-self: right;
  justify-items: center;
  grid-template-columns: auto auto;
  background-color: ${props => props.theme.theme.bg.secondary};
  border-radius: 2px;
  box-shadow: 0 1px 5px 1px rgba(0,0,0,0.1);

  @media (min-width: 1000px){
    display: none;
  }
`

const RangeButtons = ({ timeRange, setTimeRange}) => {
  const labels = [ 
    {
      name: 'history',
      label: 'Last Played'
    },
    {
      name: 'short_term',
      label: '1 Month'
    },
    {
      name: 'medium_term',
      label: '6 Months'
    },
    {
      name: 'long_term',
      label: 'All Time'
    }
  ]

  return(
    <RangeButtonsGrid>
      {labels.map((item) => (
        <Button 
          className={timeRange == item.name ? 'selected' : ''}
          onClick={() => setTimeRange(item.name)}
          key={item.name}
        >
          {item.label}
        </Button>
      ))}
    </RangeButtonsGrid>
  )
}

const ContentTypeButtons = ({ contentType, setContentType }) => {
  const labels = [ 'tracks', 'artists' ]

  return(
    <ContentTypeButtonsGrid>
      {labels.map(item => (
        <Button 
          className={contentType == item ? 'selected' : ''}
          onClick={() => setContentType(item)}
          key={item}
        >
          {item}
        </Button>
      ))}
    </ContentTypeButtonsGrid>
  )
}


const FilterButtons = ({timeRange, setTimeRange, contentType, setContentType}) => {
  const labels = [ 
    {
      name: 'history',
      label: 'Last Played'
    },
    {
      name: 'short_term',
      label: '1 Month'
    },
    {
      name: 'medium_term',
      label: '6 Months'
    },
    {
      name: 'long_term',
      label: 'All Time'
    }
  ]

  return(
    <Container>
      <RangeButtons timeRange={timeRange} setTimeRange={setTimeRange} />
      <ContentTypeButtons contentType={contentType} setContentType={setContentType} />
    </Container>
  )
}

export default FilterButtons