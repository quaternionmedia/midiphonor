import m from 'mithril'
import { o } from '../components'
import './clock.css'

export const TransportClock = {
  view: ({ attrs: { cell } }) =>
    m('.clock', {}, [
      o(cell.state.bars),
      ':',
      o(cell.state.beats),
      ':',
      o(cell.state.sixteenths),
    ]),
}
