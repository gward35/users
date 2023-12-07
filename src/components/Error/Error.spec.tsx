import { screen, render } from '@testing-library/react'
import Error from './Error'

describe('Error Component', () => {
  it('checks text', () => {
    render(<Error />)
    expect(screen.getByTestId('errorMsg')).toHaveTextContent(
      'Sorry, an error has happened on our end! Please try refreshing the page. If the error persists please contact the Help Center'
    )
  })

  it('checks link', () => {
    render(<Error />)
    expect(screen.getByTestId('errorLink')).toHaveAttribute(
      'href',
      'mailto:help@myusers.com'
    )
  })
})
