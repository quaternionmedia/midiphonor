import m from 'mithril'
import { o } from '../components'
import { OneIndex, TwoDecimal } from '../../utils/streams'
import { Stream } from '../../types'

export const Seperator = m('', ':')

export const TransportClock = {
  view: ({ attrs: { state } }) =>
    m('.clock', {}, [
      o(OneIndex(state().bars), { class: 'bars' }),
      Seperator,
      o(OneIndex(state().beats)),
      Seperator,
      o(TwoDecimal(OneIndex(state().sixteenths))),
    ]),
}
