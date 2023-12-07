import {
  validateHEX,
  getTextColor,
  getContrast,
  getLuminance,
  getsRGB,
} from './logic'

describe('validation functions', () => {
  it('validates HEX', () => {
    expect(validateHEX(' ')).toEqual(false)
    expect(validateHEX('red')).toEqual(false)
    expect(validateHEX('rgb(0, 0, 298)')).toEqual(false)
    expect(validateHEX('rgb(0, 0, 0)')).toEqual(false)
    expect(validateHEX('#ff0000')).toEqual(true)
    expect(validateHEX('#000')).toEqual(true)
  })

  it('getTextColor', () => {
    expect(getTextColor('#ffee00')).toEqual(false)
    expect(getTextColor('#000')).toEqual(true)
  })

  it('getContrast', () => {
    expect(getContrast('#ffee00', '#fff')).toEqual(2.584411974098025)
    expect(getContrast('#ffee00', '#000')).toEqual(17.48181426660904)
    expect(getContrast('#000', '#fff')).toEqual(6.764329542587843)
    expect(getContrast('#000', '#000')).toEqual(1)
  })

  it('getLuminance', () => {
    expect(getLuminance('#ffee00')).toEqual(0.824090713330452)
    expect(getLuminance('#fff')).toEqual(0.2882164771293922)
  })

  it('getsRGB', () => {
    expect(getsRGB('#ffee00'.substr(1, 2))).toEqual(1)
    expect(getsRGB('#ffee00'.substr(3, 2))).toEqual(0.8549926081242338)
    expect(getsRGB('#ffee00'.substr(-2))).toEqual(0)
  })
})
