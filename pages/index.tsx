import type { NextPage } from 'next'
import Head from 'next/head'
import {getPosts} from '../services'
import {PostCard, PostWidget, Categories} from '../components'

const Home: NextPage = ({posts}) => {
  return (
    <div className="container mx-auto px-10 mb-8 pt-50">
      <Head>
        <title>e-Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid g rid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map(post=><PostCard post={post.node} key={post.node.title} />)}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative lg:top-40">
              <PostWidget />
              <Categories /> 
            </div>
          </div>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [];
  console.log('was here :>> ', new Date());
  return {
    props:{posts}
  }
}

export default Home
