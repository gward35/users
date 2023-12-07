import { render } from '@testing-library/react'
import UserCard, { modifyUsers } from './UserCard'
import { API_RESULT } from '@/testing/constants'

describe('UserCard', () => {
  const PROPS = {
    cardColor: '',
    page: 1,
    isLargerThan768: true,
    isValid: true,
  }

  it('renders component and snaps', () => {
    const utils = render(<UserCard {...PROPS} />)
    expect(utils.container).toMatchSnapshot()
  })

  it('tests constant response', () => {
    expect(modifyUsers(API_RESULT)).toEqual([
      {
        cell: '987-654-3210',
        email: 'a@b.com',
        id: {
          name: 'C',
          value: 'D',
        },
        location: {
          city: 'City',
          coordinates: {
            latitude: '30.5',
            longitude: '95.5',
          },
          country: 'Country',
          postcode: 123456,
          state: 'State',
          street: {
            name: 'Main St',
            number: 123,
          },
          timezone: {
            description: 'Main St USA',
            offset: '+1:00',
          },
        },
        name: {
          first: 'A',
          last: 'B',
          title: 'Honorable',
        },
        phone: '012-345-6789',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/88.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/88.jpg',
          thumbnail: 'https://randomuser.me/api/portrait',
        },
      },
    ])
  })
})
