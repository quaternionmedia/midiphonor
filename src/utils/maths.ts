//map function
export function mapValue(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

export function mapValueToInteger(value, inMin, inMax, outMin, outMax) {
  return Math.round(mapValue(value, inMin, inMax, outMin, outMax))
}

export function mapValueToNearestFive(value, inMin, inMax, outMin, outMax) {
  return Math.round(mapValue(value, inMin, inMax, outMin, outMax) / 5) * 5
}
