import {type CardProps } from '@/interfaces'
import React from 'react'
const Card = ({title,content} : CardProps) => {
  return (
    <div className='p-4 border w-100 '>
        <div className='text-3xl'>{title}</div>
        <div className='text-sm'>{content}</div>
    </div>
  )
}

export default Card