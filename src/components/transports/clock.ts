import m from 'mithril'
import { o } from '../components'

export const TransportClock = {
  view: ({ attrs: { cell } }) =>
    m('.clock', {}, [
      cell.state.bars,
      ':',
      cell.state.beats,
      ':',
      cell.state.sixteenths,
    ]),
}
