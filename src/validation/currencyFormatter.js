export const formatCurrency = (value) => {
  // return nothing if no value
  if (!value) return value

  const currentValue = value.replace(/[^\d\.]/g, '')
  const hasCentsSeparator = new RegExp('[\.]', 'g').test(currentValue)
  const sections = currentValue.split('.')
  const dollarLength = sections[0].length
  const centsLength = sections[1]?.length

  // Handle cents functionality
  if (centsLength > 0)
    sections[1] = `.${sections[1]}`

  if (centsLength === 0 && hasCentsSeparator) {
    sections[1] = '.'
  }

  if (centsLength > 2) {
    sections[1] = sections[1].slice(0, -1);
  }

  // returns: "$x", "$xx", "$xxx", "$xxx.x", "$xxx.xx"
  if (dollarLength < 3) return `$${sections[0]}${sections[1] ? sections[1] : ''}`

  // Handle commas
  sections[0] = sections[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return `$${sections[0]}${sections[1] ? sections[1] : ''}`
}