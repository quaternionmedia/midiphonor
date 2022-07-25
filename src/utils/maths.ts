//map function
interface Map {
  value: number
  inMin: number
  inMax: number
  outMin: number
  outMax: number
}

export function mapValue(map: Map) {
  return (
    ((map.value - map.inMin) * (map.outMax - map.outMin)) /
      (map.inMax - map.inMin) +
    map.outMin
  )
}

export function mapValueToInteger(map: Map) {
  return Math.round(mapValue({ ...map }))
}

export function mapValueToNearestFive(map: Map) {
  return Math.round(mapValue({ ...map }) / 5) * 5
}
