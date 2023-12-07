import {
  Box,
  Flex,
  InputLeftAddon,
  InputGroup,
  Input,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { ChakraProps } from '@chakra-ui/react'

export interface DumbColorInputProps extends ChakraProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isDisabled: boolean
  isLargerThan768: boolean
  isValid: boolean
  value: string
}

export const DumbColorInput = ({
  onChange,
  isDisabled,
  isLargerThan768,
  isValid,
  value,
}: DumbColorInputProps) => {
  return (
    <Flex width="100%" justifyContent="center" px={isLargerThan768 ? 0 : 4}>
      <Flex flexDirection="column" width={isLargerThan768 ? '50%' : '100%'}>
        <Box as="label" htmlFor="changeColor" hidden />
        <InputGroup>
          <InputLeftAddon>
            <Tooltip
              label={
                'Valid HEX format starts with a # and can be three or six characters long e.g. #eee or #ff0000'
              }
              aria-label="tooltip"
            >
              <InfoOutlineIcon data-testid="infoIcon" color="primary" />
            </Tooltip>
          </InputLeftAddon>
          <Input
            borderColor={!isValid && value && !isDisabled ? '#ff0000' : 'inherit'}
            isDisabled={isDisabled}
            id="changeColor"
            data-testid="colorInput"
            name="color"
            placeholder={value ? value : 'Change color'}
            onChange={onChange}
            type="text"
          />
        </InputGroup>
        {!isValid && value && !isDisabled && (
          <Text
            fontSize="sm"
            data-testid="errorMsg"
            display="block"
            color="danger.100"
          >
            Input is not valid. Please try again.
          </Text>
        )}
      </Flex>
    </Flex>
  )
}

export default DumbColorInput
