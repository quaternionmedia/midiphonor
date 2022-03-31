import { Transport, TransportTime } from 'tone'
import { TransportState } from './types'
import merge from 'mergerino'
import { stream, scan } from 'flyd'

const initial = {
  bpm: stream(120),
  time: stream(0),
  bars: stream(0),
  beats: stream(0),
  sixteenths: stream(0),
  transportTime: TransportTime(),
  state: stream(Transport.state),
}

export const update = stream()
export const states = scan(merge, initial, update)

export const state: TransportState = {
  bpm: stream(120),
  time: stream(0),
  bars: stream(0),
  beats: stream(0),
  sixteenths: stream(0),
  transportTime: TransportTime(),
  state: stream(Transport.state),
}

window.state = states
