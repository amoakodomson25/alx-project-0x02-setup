import { UserProps } from '@/interfaces'
import React from 'react'

const UserCard = ({name,email,address}:UserProps) => {
  return (
    <div className='w-80'>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Address: {address}</div>
    </div>
  )
}

export default UserCard