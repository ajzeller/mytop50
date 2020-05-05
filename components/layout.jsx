import React from 'react';
import Head from 'next/head';
import styled from 'styled-components'
import Header from './header';
import Footer from './footer';

const Main = styled.main`
  color: ${props => props.theme.theme.text.primary};
  /* background-color: ${props => props.theme.theme.bg.secondary}; */
  background-color: ${props => props.theme.theme.bg.primary};
  margin: 0;
  padding: 0px 0px 20px 0px;
  box-sizing: border-box;
  min-height: calc(100vh - 65px - 152px - 0px);
`

const Content = styled.div`
  max-width: ${props => props.theme.theme.contentWidths[0]};
  margin: auto;
`

const Layout = ({ headerIsVisible, children }) => (
  <div>
      <Head>
        <meta name="description" content="View your most-played Spotify artists and tracks over time."/>
        <title>MyTop50</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mytop50" />
        <meta name="twitter:title" content="MyTop50" />
        <meta name="twitter:description" content="View your most-played Spotify artists and tracks over time" />
        <meta name="twitter:image" content="https://mytop50.com/twitter1.png" />
      </Head>

      {headerIsVisible && <Header />}

      <Main>
        <Content >{children}</Content>
      </Main>

      <Footer />

  </div>

);

export default Layout;
