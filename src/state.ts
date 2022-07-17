import m from 'mithril'
import { Transport, TransportTime } from 'tone'
import { TransportState } from './types'
import { o, Observable } from './components/components'
import merge from 'mergerino'
import { stream, scan } from 'flyd'
import { syntaxHighlight } from './utils'
import './syntax.css'

const initialState: TransportState = {
  bpm: stream(120),
  time: stream(0),
  bars: stream(0),
  beats: stream(0),
  sixteenths: stream(0),
  transportTime: TransportTime(),
  state: stream(Transport.state),
  connected: [],
}

/**
State viewer
*/
export const State = {
  oncreate: ({ dom, attrs: { state } }) => {
    state.map(s => {
      // console.log('new state', s)
      m.render(dom, m('pre', {}, JSON.stringify(state, null, 2)))
    })
  },
  view: ({ attrs: { state } }) => m('pre', {}, JSON.stringify(state, null, 2)),
}

export const update = stream()
export const states = scan(merge, initialState, update)

window.state = states
