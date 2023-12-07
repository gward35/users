export type Name = {
  title: string
  first: string
  last: string
}

export type Picture = {
  large: string
  medium: string
  thumbnail: string
}

export type Coordinates = {
  latitude: string
  longitude: string
}

export type Street = {
  name: string
  number: number
}

export type Timezone = {
  description: string
  offset: string
}

export type Location = {
  city: string
  coordinates: Coordinates
  country: string
  postcode: number
  state: string
  street: Street
  timezone: Timezone
}

export type Id = {
  name: string
  value: string
}

export type Info = {
  page: number
  results: number
  seed: string
  version: string
}

export type DOB = {
  date: string
  age: number
}

export type Login = {
  md5: string
  password: string
  salt: string
  sha1: string
  sha256: string
  username: string
  uuid: string
}

export type Results = {
  cell: string
  dob: DOB
  email: string
  gender: string
  id: Id
  location: Location
  login: Login
  name: Name
  nat: string
  phone: string
  picture: Picture
}

export interface Users {
  info: Info
  results: Results[]
}

export type ModifiedUsers = {
  name: Name
  cell: string
  email: string
  phone: string
  picture: Picture
  location: Location
  id: Id
}
