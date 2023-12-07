import { screen, render } from '@testing-library/react'
import DumbUserCard, { DumbUserCardProps } from './UserCard.dumb'
import { MODIFIED_USERS } from '@/testing/constants'

describe('UserCard', () => {
  const PROPS: DumbUserCardProps = {
    cardColor: '',
    modifiedUsers: MODIFIED_USERS,
    isLargerThan768: false,
    isLoading: false,
    isValid: true,
  }

  it('renders card given user data', () => {
    render(<DumbUserCard {...PROPS} />)
    expect(screen.getByTestId('userCard')).toBeInTheDocument()
  })

  it('does not render card given empty []', () => {
    const emptyUsers = { modifiedUsers: [] }
    const MODIFIED_PROPS = { ...PROPS, ...emptyUsers }
    render(<DumbUserCard {...MODIFIED_PROPS} />)
    expect(screen.queryByTestId('userCard')).toBe(null)
  })

  it('displays loader', () => {
    const isLoading = { isLoading: true }
    const MODIFIED_PROPS = { ...PROPS, ...isLoading }
    render(<DumbUserCard {...MODIFIED_PROPS} />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('name field fallback', () => {
    const MODIFIED_PROPS = { ...PROPS, ...(MODIFIED_USERS[0].name = {}) }
    render(<DumbUserCard {...MODIFIED_PROPS} />)
    expect(screen.getByTestId('name').textContent).toEqual('Unknown Unknown')
  })

  it('location field fallback', () => {
    const MODIFIED_PROPS = { ...PROPS, ...(MODIFIED_USERS[0].location = {}) }
    render(<DumbUserCard {...MODIFIED_PROPS} />)
    expect(screen.getByTestId('location').textContent).toEqual(
      'Unknown, Unknown'
    )
  })

  it('email field fallback', () => {
    const MODIFIED_PROPS = { ...PROPS, ...(MODIFIED_USERS[0].email = null) }
    render(<DumbUserCard {...MODIFIED_PROPS} />)
    expect(screen.getByTestId('email').textContent).toEqual('Unknown')
  })

  it('phone field fallback', () => {
    const MODIFIED_PROPS = { ...PROPS, ...(MODIFIED_USERS[0].cell = '') }
    render(<DumbUserCard {...MODIFIED_PROPS} />)
    expect(screen.getByTestId('phoneNumber').textContent).toEqual(
      PROPS.modifiedUsers[0].phone
    )
  })
})
