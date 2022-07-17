import m from 'mithril'
import { Transport, TransportTime } from 'tone'
import { TransportState } from './types'
import { Observable } from './components/components'
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
  view: ({ attrs: { state } }) => m('pre', {}, m.trust(syntaxHighlight(state))),
}

export const update = stream()
export const states = scan(merge, initialState, update)

window.state = states
