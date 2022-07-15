import { Stream } from '../../types'

export const TwoDigit = (s: Stream<Number>) =>
  s.map(v => String(v).padStart(2, '0'))

export const TwoDecimal = (s: Stream<Number>) => s.map(v => v.toFixed(2))

export const OneIndex = (s: Stream<Number>) => s.map(v => v + 1)
