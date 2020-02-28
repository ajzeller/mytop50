import styled from 'styled-components'
import FilterButtons from '../components/filterButtons'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-template-areas: "tracks"; */
  /* grid-template-areas: ${props => (props.contentType == 'tracks' ? 'tracks' : 'artists')}; */
  /* padding: ${props => (props.contentType == 'tracks' ? '10px' : '10px')}; */
  /* background-color: ${props => (props.contentType == 'tracks' ? 'white' : 'black')}; */
  @media (min-width: 1000px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 50px;
    }
`

const ChartColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${props => props.theme.theme.border.primary};
  grid-gap: 1px;

  &.tracks {
    /* grid-area: tracks; */
    display: ${props => (props.contentType == 'tracks' ? 'grid' : 'none')};

    @media (min-width: 1000px) {
      display: grid;
    }
  }

  &.artists {
    /* grid-area: artists; */
    display: ${props => (props.contentType == 'artists' ? 'grid' : 'none')};

    @media (min-width: 1000px) {
      display: grid;
    }
  }
`

const TrackItem = styled.div`
  display: grid;
  align-items: center;
  background-color: ${props => props.theme.theme.bg.tertiary};
  grid-template-columns: 60px 1fr 50px;
  height: 60px;

  .inner {
    padding: 0px 15px;
    display: grid;
    font-size: 0.8rem;

    .trackName {
      font-weight: 500;
    }
    
    .artistName {
      color: ${props => props.theme.theme.text.tertiary};
    }
  }
`

const ArtistItem = styled.div`
  display: grid;
  align-items: center;
  background-color: ${props => props.theme.theme.bg.tertiary};
  grid-template-columns: 60px 1fr 50px;
  height: 60px;

  .inner {
    padding: 0px 15px;
    display: grid;
    font-size: 0.8rem;

    .artistName {
      font-weight: 500;
    }

    .followerCount {
      color: ${props => props.theme.theme.text.tertiary};
    }
  }

`

const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`

const Charts = ({ 
  spotifyData, 
  timeRange, 
  setTimeRange,
  contentType,
  setContentType
 }) => {
  // console.log(spotifyData)

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let tracks = ''
  let artists = ''

  const setTracksChart = () => {
    if(spotifyData){
      console.log(spotifyData)
      if(timeRange !== 'history'){
        tracks = (spotifyData.tracks[timeRange].items.map((item, i) => (
          <TrackItem key={i} >
          <Image src={item.album.images[0].url} />
          <div className='inner'>
            <span className='trackName'>{item.name}</span>
            <span className='artistName'>{item.artists[0].name}</span>
          </div>
          </TrackItem>
        )))
      } else {
        tracks = (spotifyData.tracks[timeRange].items.map((item, i) => (
          <TrackItem key={i}>
          <Image src={item.track.album.images[0].url} />
          <div className='inner'>
            <span className='trackName'>{item.track.name}</span>
            <span className='artistName'>{item.track.artists[0].name}</span>
          </div>
          </TrackItem>
        )))
      }
    }
  }

  setTracksChart()

  const setArtistsChart = () => {
    if(spotifyData){
      if(timeRange !== 'history'){
        artists = (spotifyData.artists[timeRange].items.map((item,i) => (
          <ArtistItem key={i}>
            <Image src={item.images[0].url} />
            <div className='inner'>
              <span className='artistName'>{item.name}</span>
              <span className='followerCount'>{numberWithCommas(item.followers.total)} followers</span>
            </div>
          </ArtistItem>
        )))
      }
    }
  }

  setArtistsChart()

  // const tracks = topTracks && timeRange !== (topTracks.items.map(item => (
  //   <TrackItem>
  //   <Image src={item.album.images[0].url}></Image>
  //   <div className='inner'>
  //     <span className='trackName'>{item.name}</span>
  //     <span className='artistName'>{item.artists[0].name}</span>
  //   </div>
  //   </TrackItem>
  // )))

  return(
    <>
      
      <Container contentType={contentType}>
        <ChartColumn className='tracks' contentType={contentType}>
          {tracks}
        </ChartColumn>

        <ChartColumn className='artists' contentType={contentType}>
          {artists}
        </ChartColumn>
      </Container>
    </>
  )
}

export default Charts