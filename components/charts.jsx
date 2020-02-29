import { useContext } from "react";
import styled from 'styled-components'
import { SpotifyContext } from '../lib/spotify'
import { IoIosPlay, IoIosArrowForward } from "react-icons/io";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1000px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 50px;
    }
`

const ChartColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${props => props.theme.theme.border.primary};
  box-shadow: 0 1px 5px 1px rgba(0,0,0,0.1);

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
  grid-template-columns: 60px 1fr 30px;
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

  svg {
    color: ${props => props.theme.theme.text.tertiary};
    vertical-align: bottom;
  }
`

const ArtistItem = styled.div`
  display: grid;
  align-items: center;
  background-color: ${props => props.theme.theme.bg.tertiary};
  grid-template-columns: 60px 1fr 30px;
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

  svg {
    color: ${props => props.theme.theme.text.tertiary};
    vertical-align: bottom;
  }
`

const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  position: absolute;
`

const ImageContainer = styled.div`
  width: 60px;
  height: 60px;
`

const Index = styled.div`
  background-color: ${props => props.theme.theme.colors.spotifyBlue};
  position: absolute;
  color: #fff;
  font-size: 0.7rem;
  padding: 3px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 1px 5px 1px rgba(0,0,0,0.1);
`

const Charts = () => {
  // console.log(spotifyData)

  const { 
    spotifyData, 
    timeRange, 
    setTimeRange,
    contentType,
    setContentType } = useContext(SpotifyContext)

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
            <ImageContainer>
              <Image src={item.album.images[2].url} />
              <Index>{i+1}</Index>
            </ImageContainer>
            <div className='inner'>
              <span className='trackName'>{item.name}</span>
              <span className='artistName'>{item.artists[0].name}</span>
            </div>
            <a href={item.external_urls.spotify} target='_blank'><IoIosPlay size={'20px'} /></a> 
          </TrackItem>
        )))
      } else {
        tracks = (spotifyData.tracks[timeRange].items.map((item, i) => (
          <TrackItem key={i}>
            <ImageContainer>
              <Image src={item.track.album.images[2].url} />
              <Index>{i+1}</Index>
            </ImageContainer>
            <div className='inner'>
              <span className='trackName'>{item.track.name}</span>
              <span className='artistName'>{item.track.artists[0].name}</span>
            </div>
            <a href={item.track.external_urls.spotify} target='_blank'><IoIosPlay size={'20px'} /></a> 
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
            <ImageContainer>
              <Image src={item.images[2].url} />
              <Index>{i+1}</Index>
            </ImageContainer>
            <div className='inner'>
              <span className='artistName'>{item.name}</span>
              <span className='followerCount'>{numberWithCommas(item.followers.total)} followers</span>
            </div>
            <a href={item.external_urls.spotify} target='_blank'><IoIosArrowForward size={'20px'} /></a> 

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