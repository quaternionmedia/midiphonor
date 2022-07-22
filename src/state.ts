import m from 'mithril'
import { Transport, TransportTime } from 'tone'
import { TransportState } from './types'
import merge from 'mergerino'
import { stream, scan } from 'flyd'

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

export const update = stream()
export const states = scan(merge, initialState, update)
export const getState = () => states()
export const createCell = state => ({ state, getState, update })
export const cells = states.map(createCell)

cells.map(() => {
  m.redraw()
})

window.state = states
window.cells = cells
