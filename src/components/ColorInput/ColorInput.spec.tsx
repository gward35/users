import { render } from '@testing-library/react'
import ColorInput from './ColorInput'

describe('Color Input', () => {
  const PROPS = {
    isDisabled: false,
    isValid: true,
    onChange: jest.fn(),
    value: '',
  }

  it('renders component and snaps', () => {
    const utils = render(<ColorInput {...PROPS} />)
    expect(utils.container).toMatchSnapshot()
  })
})
