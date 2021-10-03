import Head from 'next/head'
import Header from '../components/Header'


const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home
