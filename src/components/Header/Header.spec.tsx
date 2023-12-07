import { screen, render } from '@testing-library/react'
import Header from './Header'
import { HeaderProps } from './Header'

describe('Header', () => {
  const PROPS: HeaderProps = {
    kind: 'p',
    text: "I'm a paragraph",
  }
  it('renders header', () => {
    render(<Header {...PROPS} />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('header')).toHaveTextContent("I'm a paragraph")
  })
})
