import NextLink from 'next/link'
import { Flex, Link, Text } from '@chakra-ui/react'
import Header from '../Header/Header'

export const Error = () => {
  return (
    <Flex flexDirection="column" alignItems="center" mb={8}>
      <Header kind="h2" text="Oh No!" />
      <Text as="p" mx={4} data-testid="errorMsg">
        Sorry, an error has happened on our end! Please try refreshing the page.
        If the error persists please contact the{' '}
        <Link
          as={NextLink}
          color="primary.100"
          data-testid="errorLink"
          isExternal
          href="mailto:help@myusers.com"
        >
          Help Center
        </Link>
      </Text>
    </Flex>
  )
}

export default Error
