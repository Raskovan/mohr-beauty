export const getColor = month => {
  switch (month.toUpperCase()) {
    case 'JANUARY':
      return '#55bf79'
    case 'FEBRUARY':
      return '#df6abe'
    case 'MARCH':
      return '#8f54e1'
    case 'APRIL':
      return '#54e1c0'
    case 'MAY':
      return '#c2e154'
    case 'JUNE':
      return '#e18554'
    case 'JULY':
      return '#e15454'
    case 'AUGUST':
      return '5488e1'
    case 'SEPTEMBER':
      return '#54e1df'
    case 'OCTOBER':
      return '#d5e154'
    case 'NOVEMBER':
      return '#da54e1'
    case 'DECEMBER':
      return '#549fe1'
    default:
      return '#55bf79'
  }
}

export const createMapLink = address => {
  const readyAddress =
    'https://www.google.com/maps/search/?api=1&query=' +
    address
      .replace(/•/g, '')
      .replace(/\s{2,}/g, ' ')
      .replace(/ /g, '+')
  return readyAddress
}
