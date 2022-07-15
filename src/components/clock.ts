import m from 'mithril'
import { Observable } from './components'
import { OneIndex, TwoDecimal } from '../utils'

export const Bars = state => m(Observable(OneIndex(state.bars)))
export const Beats = state => m(Observable(OneIndex(state.beats)))
export const Sixteenths = state =>
  m(Observable(TwoDecimal(OneIndex(state.sixteenths))))

export const Seperator = m('', ':')

export const TransportClock = state =>
  m('.clock', {}, [
    Bars(state),
    Seperator,
    Beats(state),
    Seperator,
    Sixteenths(state),
  ])
