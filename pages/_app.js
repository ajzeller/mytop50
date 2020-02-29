import Router from "next/router";
import withGA from "next-ga";
import { SpotifyProvider } from '../lib/spotify'
import Provider from '../components/provider'
import '../assets/styles.scss'

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return(
    <SpotifyProvider>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </SpotifyProvider>
  ) 
}

export default withGA("UA-46643989-8", Router)(MyApp);