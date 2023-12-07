import useSWR from 'swr'
import { Users } from '@/types/userTypes'

export const fetcher = (url: string) => fetch(url).then(res => res.json())
export const useUsers = (page: number) =>
  useSWR<Users, Error>(
    `https://randomuser.me/api/?page=${page}&results=6&seed=abc`,
    fetcher
  )
