import m from 'mithril'
import { Stream } from '../types'
import { Observable } from './components'
import { state } from '../state'
import { OneIndex, TwoDigit, TwoDecimal } from '../utils'


export const Bars = m(Observable(TwoDigit(OneIndex(state.bars))))
export const Beats = m(Observable(TwoDigit(OneIndex(state.beats))))
export const Sixteenths = m(Observable(state.sixteenths))
export const Seperator = m('', ':')

export const TransportClock = m('.clock', {}, [
  Bars,
  Seperator,
  Beats,
  Seperator,
  Sixteenths,
])
