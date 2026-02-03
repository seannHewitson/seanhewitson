export const getCharacterWidths = (
  fontSize: string = '46px',
  fontWeight: string | number = 700
): Record<string, number> => {
  // Create a temporary element with the same styles as the Typography component
  const tempElement = document.createElement('span')
  tempElement.style.fontSize = fontSize
  tempElement.style.fontFamily = "'Outfit','Outfit Fallback'"
  tempElement.style.fontWeight = String(fontWeight)
  tempElement.style.display = 'inline-block'
  tempElement.style.position = 'absolute'
  tempElement.style.visibility = 'hidden'
  tempElement.style.whiteSpace = 'pre'
  tempElement.style.letterSpacing = '-0.03em'

  // Append to body to measure
  document.body.appendChild(tempElement)

  const widths: Record<string, number> = {}

  // Define all characters to measure
  const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.!?\'":-;'

  // Measure each character
  for (const char of characters) {
    tempElement.textContent = char === ' ' ? '\u00A0' : char
    const width = tempElement.getBoundingClientRect().width
    widths[char] = width
  }

  // Clean up
  document.body.removeChild(tempElement)

  return widths
}
