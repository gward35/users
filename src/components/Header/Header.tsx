import { Box, Text } from '@chakra-ui/react'
import { As } from '@chakra-ui/react'

export type HeaderProps = {
  kind: As
  text: string
}

export const Header = ({ kind, text }: HeaderProps) => {
  return (
    <Box>
      <Text
        as={kind}
        fontSize="3xl"
        fontWeight="bold"
        data-testid="header"
        textAlign="center"
        textTransform="uppercase"
        my={8}
      >
        {text}
      </Text>
    </Box>
  )
}

export default Header
