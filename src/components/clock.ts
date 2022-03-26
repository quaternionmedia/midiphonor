import m from 'mithril'
import { Observable } from './components'
import { state } from '../state'
import { OneIndex, TwoDecimal } from '../utils'

export const Bars = m(Observable(OneIndex(state.bars)))
export const Beats = m(Observable(OneIndex(state.beats)))
export const Sixteenths = m(Observable(TwoDecimal(OneIndex(state.sixteenths))))

export const Seperator = m('', ':')

export const TransportClock = m('.clock', {}, [
  Bars,
  Seperator,
  Beats,
  Seperator,
  Sixteenths,
])
