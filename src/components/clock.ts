import m from 'mithril'
import { Stream } from '../types'
import { Observable } from './components'
import { state } from '../state'

export const TwoDigit = (s: Stream<Number>) =>
  s.map(v => String(v).padStart(2, '0'))

export const OneIndex = (s: Stream<Number>) => s.map(v => v + 1)

export const Bars = m(Observable(TwoDigit(OneIndex(state.bars))))
export const Beats = m(Observable(TwoDigit(OneIndex(state.beats))))
export const Sixteenths = m(Observable(state.sixteenths))

export const TransportClock = m('.clock', {}, [
  Bars,
  m('', ':'),
  Beats,
  m('', ':'),
  Sixteenths,
])
