import {
  Avatar,
  Card,
  CardBody,
  ChakraProps,
  Flex,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react'
import { ModifiedUsers } from '@/types/userTypes'
import { getTextColor } from '../ColorInput/logic/logic'

export interface DumbUserCardProps extends ChakraProps {
  cardColor: string
  modifiedUsers: ModifiedUsers[]
  isLargerThan768: boolean
  isLoading: boolean
  isValid: boolean
}

export const DumbUserCard = ({
  cardColor,
  modifiedUsers,
  isLargerThan768,
  isLoading,
  isValid,
}: DumbUserCardProps) => {
  const setTextColor = !isValid
    ? 'black'
    : getTextColor(cardColor)
    ? 'white'
    : 'black'
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={['column', 'row']}
        flexWrap="wrap"
        py={8}
        mx={4}
      >
        {modifiedUsers.map((u: ModifiedUsers, i: number) => (
          <Card
            key={u.id.value + i}
            alignItems="center"
            {...(isValid ? { bgColor: cardColor } : {})}
            border="1px solid"
            borderColor="lightGray.100"
            boxShadow="5px 5px 10px #D8DDE8"
            data-testid="userCard"
            mr={[0, 0, 4]}
            mb={4}
            padding={4}
            flex={isLargerThan768 ? '1 0 30%' : '1 0 80%'}
            sx={{
              [':nth-of-type(3n)']: { mr: 0 },
            }}
          >
            <Avatar
              borderRadius="100%"
              color="black"
              name={`${u.name.first ?? 'Unknown'} ${u.name.last ?? 'Unknown'}`}
              src={u.picture.large}
              srcSet={`${u.picture.thumbnail} 480w, ${u.picture.medium} 800w`}
              mb={4}
              height={20}
              width={20}
            />
            <Stack>
              <CardBody>
                <Text
                  as="p"
                  color={setTextColor}
                  data-testid="name"
                  fontSize="sm"
                >
                  {u.name.first ?? 'Unknown'} {u.name.last ?? 'Unknown'}
                </Text>
                <Text
                  as="p"
                  color={setTextColor}
                  data-testid="location"
                  fontSize="sm"
                >
                  {u.location.city ?? 'Unknown'},{' '}
                  {u.location.country ?? 'Unknown'}
                </Text>
                <Text
                  as="p"
                  color={setTextColor}
                  data-testid="email"
                  fontSize="sm"
                >
                  {u.email ?? 'Unknown'}
                </Text>
                <Text
                  as="p"
                  color={setTextColor}
                  data-testid="phoneNumber"
                  fontSize="sm"
                >
                  {u.cell ? u.cell : u.phone}
                </Text>
              </CardBody>
            </Stack>
          </Card>
        ))}
      </Flex>
      {isLoading && (
        <Flex justifyContent="center">
          <Spinner
            thickness="6px"
            speed="0.65s"
            emptyColor="lightGray.100"
            color="primary.100"
            size="xl"
            mb={8}
          />
        </Flex>
      )}
    </>
  )
}

export default DumbUserCard
