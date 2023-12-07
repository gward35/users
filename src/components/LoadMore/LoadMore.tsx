import { Button } from '@chakra-ui/react'

export type LoadMoreProps = {
  isDisabled: boolean
  isLoading: boolean
  onClick: () => void
}

export const LoadMore = ({ isDisabled, isLoading, onClick }: LoadMoreProps) => {
  return (
    <Button
      bgColor="primary.100"
      color="white"
      data-testid="loadMore"
      _hover={{
        bgColor: 'primary.200',
      }}
      isDisabled={isDisabled}
      isLoading={isLoading}
      mx={4}
      mb={8}
      onClick={onClick}
    >
      Load More
    </Button>
  )
}

export default LoadMore
