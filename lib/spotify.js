import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch';
import Cookie from "js-cookie";
import moment from 'moment'
import { parseCookies } from "./parseCookies";

// const baseUrl = process.env.BASE_URL.replace(/\/+$/, '')

const SpotifyContext = React.createContext()

const SpotifyProvider = (props) => {
  const [spotifyData, setSpotifyData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [refreshToken, setRefreshToken] = useState('')

    // history, short_term, medium_term, long_term
    const [timeRange, setTimeRange] = useState('short_term')

    // tracks or artists
    const [contentType, setContentType] = useState('tracks')


  const getTracks = async (refresh_token, time_range, limit) => {
    try{
      console.log('get songs')
      const res = await fetch(
        `/api/tracks?refresh_token=${refresh_token}&time_range=${time_range}&limit=${limit}`
      )
      const json = await res.json()
      console.log(json)
      return(json)

    } catch(err) {
      return(err)
    }
  }

  const getArtists = async (refresh_token, time_range, limit) => {
    try{
      console.log('get artists')
      const res = await fetch(
        `/api/artists?refresh_token=${refresh_token}&time_range=${time_range}&limit=${limit}`
      )
      const json = await res.json()
      console.log(json)
      return(json)

    } catch(err){
      return(err)
    }
  }

  const getHistory = async (refresh_token, limit) => {
    try{
      console.log('get history')
      const res = await fetch(
        `/api/history?refresh_token=${refresh_token}&limit=${limit}`
      )
      const json = await res.json()
      console.log(json)
      return(json)

    } catch(err) {
      return(err)
    }
  }

  const getProfile = async (refresh_token) => {
    try{
      console.log('get profile')
      const res = await fetch(
        `/api/profile?refresh_token=${refresh_token}`
      )
      const json = await res.json()
      // console.log(json)
      return(json)
    } catch(err) {
      return(err)
    }
  }

  const postPlaylist = async (num) => {
    try{
      const userId = spotifyData.profile.id
      console.log(userId)

      let playlist = []
      if(timeRange == 'history'){
        playlist = spotifyData.tracks[timeRange].items.map(item => (item.track.uri))
      } else {
        playlist = spotifyData.tracks[timeRange].items.map(item => (item.uri))
      }

      playlist.length = num
      const month = moment().format('MMM')
      const year = moment().format('YYYY')
      const name = `// mytop${num} ${month} ${year}`

      const payload = {
        refresh_token: refreshToken,
        id: userId,
        playlist,
        name
      }

      console.log(payload)

      const res = await fetch(`/api/playlist`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      const json = await res.json()
      console.log(json)
      return(json)

    } catch(err){
      return(err)
    }
  }

  const getSpotifyData = async () => {
    const requests = [
      getProfile(refreshToken),
      getHistory(refreshToken, 50),
      getTracks(refreshToken, 'short_term', 50),
      getTracks(refreshToken, 'medium_term', 50),
      getTracks(refreshToken, 'long_term', 50),
      getArtists(refreshToken, 'short_term', 50),
      getArtists(refreshToken, 'medium_term', 50),
      getArtists(refreshToken, 'long_term', 50)
    ]

    const responses = await Promise.all(requests)

    return(responses)
  }
  
  useEffect( () => {
    if(refreshToken && !spotifyData){
      const getData = async () => {
        setLoading(true)
        console.log('getspotifydata')
        const data = await getSpotifyData()
        // const data = await getProfile(refreshToken)
        console.log(data)
        setSpotifyData({
          profile: data[0],
          tracks: {
            history: data[1],
            short_term: data[2],
            medium_term: data[3],
            long_term: data[4]
          },
          artists: {
            short_term: data[5],
            medium_term: data[6],
            long_term: data[7]
          }
        })
        setLoading(false)
      }
  
      getData()

    }
  }, [refreshToken] )

  // console.log(refreshToken)
  // console.log(spotifyData)

  return(
    <SpotifyContext.Provider value={{ 
      refreshToken,
      setRefreshToken,
      spotifyData,
      loading,
      timeRange,
      setTimeRange,
      contentType,
      setContentType,
      postPlaylist
    }}>
      {props.children}
    </SpotifyContext.Provider>
  )
}

const SpotifyConsumer = SpotifyContext.Consumer

export { SpotifyProvider, SpotifyConsumer, SpotifyContext }