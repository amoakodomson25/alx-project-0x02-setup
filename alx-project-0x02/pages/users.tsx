import Header from '@/components/layout/Header'
import UserCard from '@/components/common/UserCard'
import React from 'react'
import { UserProps } from '@/interfaces'

interface UsersPageProps {
  users: UserProps[]
}

interface ApiUser {
  name: string
  email: string
  address: {
    street: string
    suite: string
    city: string
  }
}

const Users: React.FC<UsersPageProps> = ({ users = [] }) => {
  return (
    <>
      <Header />
      <div className="text-center p-8 text-2xl font-bold">Users</div>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data: ApiUser[] = await res.json()

    const users: UserProps[] = data.map(user => ({
      name: user.name,
      email: user.email,
      address: `${user.address.street}, ${user.address.suite}, ${user.address.city}`
    }))

    return {
      props: {
        users
      }
    }
  } catch (error) {
    console.error('Failed to fetch users:', error)
    return {
      props: {
        users: []
      }
    }
  }
}

export default Users
