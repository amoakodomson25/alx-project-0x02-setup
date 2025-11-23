import Header from '@/components/layout/Header'
import PostCard from '@/components/common/PostCard'
import React from 'react'
import { PostProps } from '@/interfaces'

interface PostsPageProps {
  posts: PostProps[]
}

interface ApiPost {
  userId: number
  id: number
  title: string
  body: string
}

const Posts: React.FC<PostsPageProps> = ({ posts = [] }) => {
  return (
    <>
      <Header />
      <div className="text-center p-8 text-3xl font-bold">Posts</div>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
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

export const getStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data: ApiPost[] = await res.json()

    const posts: PostProps[] = data.map(post => ({
      title: post.title,
      content: post.body,
      userId: post.userId
    }))

    return { props: { posts } }
  } catch (error) {
    console.error('Failed to fetch posts:', error)
    return { props: { posts: [] } }
  }
}

export default Posts
