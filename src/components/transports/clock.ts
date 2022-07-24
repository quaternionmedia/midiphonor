import m from 'mithril'
import { o } from '../components'
import { OneIndex, TwoDecimal } from '../../utils/streams'

export const Digit = {
  view: ({ attrs, children }) => m('.digit', attrs, children),
}

export const Seperator = m('.seperator', {}, ':')

export const TransportClock = {
  view: ({ attrs: { cell } }) =>
    m('.clock', {}, [
      m(Digit, o(OneIndex(cell.state.bars))),
      Seperator,
      m(Digit, o(OneIndex(cell.state.beats))),
      Seperator,
      m(Digit, o(TwoDecimal(OneIndex(cell.state.sixteenths)))),
    ]),
}
