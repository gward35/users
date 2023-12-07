import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useUsers } from '@/api/userApi'
import { Flex, useMediaQuery } from '@chakra-ui/react'
import Header from '@/components/Header/Header'
import ColorInput from '@/components/ColorInput/ColorInput'
import UserCard from '@/components/UserCard/UserCard'
import LoadMore from '@/components/LoadMore/LoadMore'
import { validateHEX } from '@/components/ColorInput/logic/logic'

export const MyUsers = () => {
  const router = useRouter()
  const [$color, $setColor] = useState<string>('')
  const [$page, $setPage] = useState<number>(1)
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const isValid = validateHEX($color)
  const { isLoading, error } = useUsers($page)

  const handleScroll = useCallback(() => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight

    if (bottom && !isLoading && isLargerThan768) {
      $setPage(prevState => prevState + 1)
    }
  }, [isLoading, isLargerThan768])

  useEffect(() => {
    router.prefetch('/')
  }, [router])

  useEffect(() => {
    const $storedColor = localStorage.getItem('$color') ?? ''
    if ($storedColor) {
      $setColor($storedColor)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [$page, isLargerThan768, isLoading, handleScroll])

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    $setColor(e.target.value)
    localStorage.setItem('$color', e.target.value)
  }

  return (
    <Flex as="section" flexDirection="column" justifyContent="center">
      <Header kind="h1" text="My Users" />
      <ColorInput
        isDisabled={error as unknown as boolean}
        isLargerThan768={isLargerThan768}
        isValid={isValid}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleColorChange(e)
        }
        value={$color}
      />
      <UserCard
        cardColor={$color}
        isLargerThan768={isLargerThan768}
        isValid={isValid}
        page={$page}
      />
      {isLoading ||
        (!isLargerThan768 && (
          <LoadMore
            isDisabled={error as unknown as boolean}
            isLoading={isLoading}
            onClick={() => $setPage(prevState => prevState + 1)}
          />
        ))}
    </Flex>
  )
}

export default MyUsers
