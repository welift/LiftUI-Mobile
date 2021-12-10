export const formatDate = (value) => {
  // return nothing if no value
  if (!value) return value

  // only allows 0-9 inputs
  const currentValue = value.replace(/[^\d]/g, '')

  const cvLength = currentValue.length

  // returns: "x", "xx"
  if (cvLength < 3) return currentValue

  // returns: "(xxx)", "(xxx) x", "(xxx) xx", "(xxx) xxx",
  if (cvLength < 5) return `${currentValue.slice(0, 2)}/${currentValue.slice(2)}`

  // returns: "(xxx) xxx-", (xxx) xxx-x", "(xxx) xxx-xx", "(xxx) xxx-xxx", "(xxx) xxx-xxxx"
  return `${currentValue.slice(0, 2)}/${currentValue.slice(2, 4)}/${currentValue.slice(4, 8)}`
}