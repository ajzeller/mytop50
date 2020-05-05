import Layout from '../components/layout';
import Post from '../components/post'

const Page = () => {
  return(
    <Layout headerIsVisible={true} >
      <Post>
        <h1>How to view your most played song on Spotify</h1>
        
        <p>
          Ever wonder what your all-time most-played song on Spotify is? You might have used Spotify Wrapped, which gives you a snapshot of your top few songs and artists at the end of each year, but these charts only apply to the past year.
        </p>

        <p>
          Spotify doesn't directly provide this data to users, but they do allow software developers to access your top charts given users' permission.
        </p>

        <p>
          <a href="/" target="_blank" className="underline">MyTop50</a> was built to give you deeper insights into your Spotify music listening over the entire history of your account. Once you login, you can see your 50 most-played artists and tracks over the last one month, six months, and all-time (since you first signed up to Spotify). 
        </p>

      </Post>
    </Layout>
  )
}

export default Page