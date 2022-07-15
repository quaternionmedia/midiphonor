import { Transport, TransportTime } from 'tone'
import { TransportState } from './types'

import { stream } from 'flyd'

export const state: TransportState = {
  bpm: stream(120),
  time: stream(0),
  bars: stream(0),
  beats: stream(0),
  sixteenths: stream(0),
  transportTime: TransportTime(),
  state: stream(Transport.state),
}
