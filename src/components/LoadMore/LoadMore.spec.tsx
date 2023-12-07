import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoadMore from './LoadMore'
const user = userEvent.setup()

describe('Load More', () => {
  const PROPS = {
    onClick: jest.fn(),
    isLoading: false,
  }

  it('loads component', () => {
    const utils = render(<LoadMore {...PROPS} />)
    expect(utils.container).toMatchSnapshot()
    expect(screen.getByTestId('loadMore')).toBeInTheDocument()
  })

  it('clicks', async () => {
    render(<LoadMore {...PROPS} />)
    user.click(screen.getByTestId('loadMore'))
    await waitFor(() => {
      expect(PROPS.onClick)
    })
  })
})
