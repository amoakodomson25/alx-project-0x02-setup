import Card from '@/components/common/Card'
import Header from '@/components/layout/Header'
import React from 'react'

const home = () => {
  return (
<>
<Header/>

    <div className='text-center'>
        <h1>Home Page</h1>


    </div>
    <div className="flex justify-center items-center mt-5">
    <Card 
        title='Hello World' content='lorem ipsum'
        />
    </div>
    </>
  )
}

export default home