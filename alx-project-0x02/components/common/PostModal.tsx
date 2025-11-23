import React, {useState} from 'react'

interface PostModalProps {
    onSubmit: (data: { title: string; content: string }) => void
    onClose: () => void
  }

  const PostModal: React.FC<PostModalProps> = ({ onSubmit, onClose }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onSubmit({ title, content })
      setTitle('')
      setContent('')
      onClose()
    }
  
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-8 mt-10'>
            <h1>Post Modal</h1>
            <input
          type="text"
          placeholder='Title'
          className='border p-2'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />            
        
        <input
          type="text"
          placeholder='Content'
          className='border p-2'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />            
        

        <button type="submit" className='border p-2 bg-black text-white'>
          Submit
        </button>        
        </form>
    </div>
  )
}

export default PostModal