export const validateHEX = (str: string) => {
  const matcher = /^#[0-9A-F]{6}$/i.test(str) || /^#[0-9A-F]{3}$/i.test(str)
  return matcher
}

export const getRGB = (x: any) => parseInt(x, 16) || x

export const getsRGB = (str: string) => {
  return getRGB(str) / 255 <= 0.03928
    ? getRGB(str) / 255 / 12.92
    : Math.pow((getRGB(str) / 255 + 0.055) / 1.055, 2.4)
}

export const getLuminance = (hexColor: string) => {
  return (
    0.2126 * getsRGB(hexColor.substr(1, 2)) +
    0.7152 * getsRGB(hexColor.substr(3, 2)) +
    0.0722 * getsRGB(hexColor.substr(-2))
  )
}

export const getContrast = (f: string, b: string) => {
  const L1 = getLuminance(f)
  const L2 = getLuminance(b)
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)
}

export const getTextColor = (bgColor: string) => {
  const whiteContrast = getContrast(bgColor, '#fff')
  const blackContrast = getContrast(bgColor, '#000')

  return whiteContrast > blackContrast
}
