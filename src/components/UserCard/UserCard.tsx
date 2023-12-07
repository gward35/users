import React, { useEffect, useState, useMemo } from 'react'
import DumbUserCard from './UserCard.dumb'
import { useUsers } from '@/api/userApi'
import { Results, ModifiedUsers } from '@/types/userTypes'
import Error from '../Error/Error'

export const modifyUsers = (users: ModifiedUsers[]) =>
  users.map(
    ({ name, cell, email, phone, picture, location, id }: ModifiedUsers) => ({
      name,
      cell,
      email,
      phone,
      picture,
      location,
      id,
    })
  )

export type UserCardProps = {
  cardColor: string
  isLargerThan768: boolean
  isValid: boolean
  page: number
}

export const UserCard = ({
  cardColor,
  isLargerThan768,
  isValid,
  page,
}: UserCardProps) => {
  const { data, error, isLoading } = useUsers(page)
  const results: Results[] = useMemo(() => {
    return data?.results ?? []
  }, [data])
  const modifiedUsers: ModifiedUsers[] = modifyUsers(results)
  const [$modifiedUsers, $setModifiedUsers] =
    useState<ModifiedUsers[]>(modifiedUsers)

  useEffect(() => {
    $setModifiedUsers(prevState => [...prevState, ...results])
  }, [results])

  if (error) return <Error />

  return (
    <DumbUserCard
      isLargerThan768={isLargerThan768}
      isLoading={isLoading}
      isValid={isValid}
      cardColor={cardColor}
      modifiedUsers={$modifiedUsers}
    />
  )
}

export default UserCard
