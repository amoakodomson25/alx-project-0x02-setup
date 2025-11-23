import Header from '@/components/layout/Header'
import PostCard from '@/components/common/PostCard'
import React, { useEffect, useState } from 'react'
import { PostProps } from '@/interfaces'

interface ApiPost {
  userId: number
  id: number
  title: string
  body: string
}

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then((data: ApiPost[]) => {
        const formatted: PostProps[] = data.map(post => ({
          title: post.title,
          content: post.body,
          userId: post.userId
        }))

        setPosts(formatted)
      })
  }, [])

  return (
    <>
      <Header />
      <div className="text-center p-8 text-2xl">Posts</div>

      <div className="flex flex-col items-center gap-4 px-4">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </div>
    </>
  )
}

export default Posts
