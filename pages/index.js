import { useState, useEffect, useContext } from "react";
import Cookie from "js-cookie";
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components'
import { parseCookies } from "../lib/parseCookies";
import Layout from '../components/layout';
import { SpotifyContext } from '../lib/spotify'
import FilterButtons from '../components/filterButtons'
import Charts from '../components/charts'
import Login from '../components/login'

const Index = ({ storedTimeRange = 'short_term', storedContentType = 'tracks' , refresh_token }) => {
  // const token = refresh_token
  if(!refresh_token){
    console.log('not logged in')
  }

  console.log(refresh_token)

  const {setRefreshToken, spotifyData} = useContext(SpotifyContext)
  setRefreshToken(refresh_token)
  console.log(spotifyData)

  // const [rememberMe, setRememberMe] = useState(() =>
  //   JSON.parse(initialRememberValue)
  // );



  // history, short_term, medium_term, long_term
  const [timeRange, setTimeRange] = useState(storedTimeRange)
  // const [timeRange, setTimeRange] = useState(() => JSON.parse(storedTimeRange))
  
  // tracks or artists
  // const [contentType, setContentType] = useState(() => JSON.parse(storedContentType))
  const [contentType, setContentType] = useState(storedContentType)

  const [topTracks, setTopTracks] = useState(null)

  // useEffect(() => {
  //   // Cookie.set("rememberMe", JSON.stringify(rememberMe));
  //   Cookie.set("storedTimeRange", JSON.stringify(timeRange));
  //   Cookie.set("storedContentType", JSON.stringify(contentType));
  // }, [timeRange, contentType]);

  const showCharts = spotifyData && (
    <>
      <Charts 
        spotifyData={spotifyData}
        timeRange={timeRange}
        setTimeRange={setTimeRange}
        contentType={contentType}
        setContentType={setContentType}
      />
    </>)

  return (
    <Layout headerIsVisible={true} >
      {!refresh_token ? <Login /> : showCharts}
      
    </Layout>
  );
};

Index.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);
  const {refresh_token_v2, storedTimeRange, storedContentType} = cookies
  // console.log(cookies)

  return {
    // initialRememberValue: cookies.rememberMe,
    refresh_token: refresh_token_v2,
    storedTimeRange,
    storedContentType
  };
};

export default Index;