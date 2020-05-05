import Layout from '../components/layout';
import Post from '../components/post'

const Page = () => {
  return(
    <Layout headerIsVisible={true} >
      <Post>
        <h1>How to view your most played artist on Spotify</h1>
        
        <p>
          Ever wonder what your all-time most-played artist on Spotify is? Do you think that you could guess them correctly? You've probably used Spotify Wrapped, which gives you a snapshot of your most-played artists at the end of each year, but these charts only apply to the past year.
        </p>

        <p>
          Spotify doesn't directly provide this data to users, but they do allow software developers to access your top charts given users' permission.
        </p>

        <p>
          <a href="/" target="_blank" className="underline">MyTop50</a> was built to answer this question and to give you deeper insights into your Spotify music listening over the entire history of your account. Once you login, you can see your 50 most-played artists and tracks over the last one month, six months, and all-time (since you first signed up to Spotify). 
        </p>

      </Post>
    </Layout>
  )
}

export default Page