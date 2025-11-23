import { type ButtonProps } from '@/interfaces'
import React from 'react'

const Button = ({size,shape}: ButtonProps) => {
  return (
    <div className={`${size} ${shape} border px-4 py-2 cursor-pointer`}>
        Press meeeee!
    </div>
  )
}

export default Button