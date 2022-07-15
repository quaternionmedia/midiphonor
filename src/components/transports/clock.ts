import m from 'mithril'
import { Observable } from '../../components'
import { state } from '../../state'
import { OneIndex, TwoDigit, TwoDecimal } from '../utils/streams'

export const Bars = m(Observable(OneIndex(state.bars)))
export const Beats = m(Observable(OneIndex(state.beats)))
export const Sixteenths = m(Observable(TwoDecimal(state.sixteenths)))

export const Seperator = m('', ':')

export const TransportClock = m('.clock', {}, [
  Bars,
  Seperator,
  Beats,
  Seperator,
  Sixteenths,
])
