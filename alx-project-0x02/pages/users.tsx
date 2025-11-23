// pages/users.tsx

import Header from '@/components/layout/Header'
import UserCard from '@/components/common/UserCard'
import { UserProps } from '@/interfaces'
import React from 'react'

interface UsersPageProps {
  users: UserProps[]
}

const Users = ({ users }: UsersPageProps) => {
  return (
    <div>
      <Header />

      <div className="flex flex-wrap gap-4 p-4">
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()

  const users: UserProps[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: `${user.address.street}, ${user.address.city}`
  }))

  return {
    props: {
      users,
    },
  }
}

export default Users
