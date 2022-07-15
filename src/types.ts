import { stream } from 'flyd'
import { TransportTimeClass } from 'tone'

const s = stream()
export type Stream = typeof s

export interface TransportState {
  bpm: Stream<number>
  state: Stream<TransportModes>
  time: Stream<string>
  bars: Stream<number>
  beats: Stream<number>
  sixteenths: Stream<number>
  transportTime: typeof TransportTimeClass
}
