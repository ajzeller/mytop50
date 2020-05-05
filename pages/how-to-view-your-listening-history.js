import Layout from '../components/layout';
import Post from '../components/post'

const Page = () => {
  return(
    <Layout headerIsVisible={true} >
      <Post>
        <h1>How to view your Spotify listening history</h1>
        <p>
          Do you ever find yourself listening to your music on Spotify throughout the day and then forgetting the name of that catchy song that you listened to a few hours ago? Although Spotify does provide a history feature that lets you view the last 50 songs you listened to, it can be difficult to find depending on the device you use.
        </p>

        <h2>On Desktop</h2>

        <p>
        If you are using Spotify on your computer, you can find your history by clicking on the burger menu "queue" button in the bottom right hand corner and then clicking the history tab.
        </p>

        <h2>On Mobile</h2>

        <p>
          On mobile your recently played songs don't always show up when tapping the burger menu "queue" button, depending on if you are in the middle of a listening session. 
        </p>

        <p>
          To solve this issue, MyTop50 displays your 50 most recently played songs along with your top played tracks and artists. Simply go to the <a href="/" target="_blank" className="underline">login page</a>, connect with your Spotify account, and tap the <strong>Last Played</strong> button.
        </p>

      </Post>
    </Layout>
  )
}

export default Page