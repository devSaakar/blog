import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
        .then((res) => {
          setRelatedPosts(res)
        })
        .catch((err) => console.log(err.message))
    } else {
      getRecentPosts()
        .then((res) => {
          setRelatedPosts(res)
        })
        .catch((err) => console.log(err.message))
    }
  }, [slug])

  console.log('slug :>> ', slug);

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b text-xl font-semibold">
        {slug ? 'Similar Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="mb-4 flex w-full items-center">
          <div className="w-30 flex-none">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              height="120px"
              width="120px"
              className="rounded-full align-middle"
            />
          </div>
          <div className="ml-4 flex-grow">
            <p className="font-xs text-gray-500">
              {moment(post.createdAt).startOf('day').fromNow()}
            </p>
            <Link href={`/post/${post.slug}`} className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
