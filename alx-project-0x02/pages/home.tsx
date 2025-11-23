import Card from '@/components/common/Card'
import Header from '@/components/layout/Header'
import React, { useState } from 'react'
import PostModal from '@/components/common/PostModal'

const Home = () => {
  const [posts, setPosts] = useState([
    { title: 'Hello World', content: 'lorem ipsum' }
  ])

  const [showModal, setShowModal] = useState(false)

  const addPost = (post: { title: string; content: string }) => {
    setPosts(prev => [...prev, post])
  }

  return (
    <>
      <Header />

      <div className='text-center'>
        <h1>Home Page</h1>

        <button
          onClick={() => setShowModal(true)}
          className="border px-4 py-2 mt-4"
        >
          Add Post
        </button>
      </div>

      <div className="flex flex-col justify-center items-center mt-5 gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        {showModal && (
          <PostModal
            onSubmit={addPost}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </>
  )
}

export default Home
