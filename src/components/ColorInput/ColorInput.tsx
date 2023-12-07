import DumbColorInput from './ColorInput.dumb'

export type ColorInputProps = {
  isDisabled: boolean
  isLargerThan768: boolean
  isValid: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const ColorInput = ({
  isDisabled,
  isLargerThan768,
  isValid,
  onChange,
  value,
}: ColorInputProps) => {
  return (
    <DumbColorInput
      onChange={onChange}
      isDisabled={isDisabled}
      isLargerThan768={isLargerThan768}
      isValid={isValid}
      value={value}
    />
  )
}

export default ColorInput
