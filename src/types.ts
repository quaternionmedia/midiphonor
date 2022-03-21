import { stream } from 'flyd'
import { TransportTime } from 'tone'

export type Stream = typeof stream

export interface TransportState {
  bpm: Stream<number>
  state: Stream<TransportModes>
  time: Stream<string>
  transportTime: typeof TransportTime
}
