import { screen, render, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import DumbColorInput from './ColorInput.dumb'
const user = userEvent.setup()

describe('ColorInput', () => {
  const PROPS = {
    isDisabled: false,
    isLargerThan768: true,
    isValid: true,
    onChange: jest.fn(),
    value: '',
  }

  it('inputs valid hex', async () => {
    render(<DumbColorInput {...PROPS} />)
    const colorInput = screen.getByTestId('colorInput')
    expect(colorInput).toBeInTheDocument()
    user.type(colorInput, '#ff0000')
    await waitFor(() => {
      expect(PROPS.onChange).toHaveBeenCalled()
    })
  })

  it('inputs invalid hex', async () => {
    const MODIFIED_PROPS = {
      ...PROPS,
      isValid: false,
      value: '#xtyx'
    }
    render(<DumbColorInput {...MODIFIED_PROPS} />)
    const colorInput = screen.getByTestId('colorInput')
    expect(colorInput).toBeInTheDocument()
    user.type(colorInput, '#xtyx')
    await waitFor(() => {
      expect(PROPS.onChange).toHaveBeenCalled()
      expect(screen.getByTestId('errorMsg')).toBeInTheDocument()
      expect(screen.getByTestId('errorMsg')).toHaveTextContent(
        'Input is not valid. Please try again.'
      )
    })
  })

  it('hovers hex tooltip', async () => {
    render(<DumbColorInput {...PROPS} />)
    const icon = screen.getByTestId('infoIcon')
    expect(icon).toBeInTheDocument()
    user.hover(icon)
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
      expect(
        screen.getByText(
          'Valid HEX format starts with a # and can be three or six characters long e.g. #eee or #ff0000'
        )
      ).toBeInTheDocument()
    })
  })

  it('shows value as placeholder', () => {
    const MODIFIED_PROPS = { ...PROPS, ...{ value: '#ff0' } }
    render(<DumbColorInput {...MODIFIED_PROPS} />)
    const colorInput = screen.getByTestId('colorInput')
    expect(colorInput).toHaveAttribute('placeholder', '#ff0')
  })
})
