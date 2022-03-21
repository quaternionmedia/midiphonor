import m from 'mithril'
import { Transport, TransportTime, Draw } from 'tone'
import { stream } from 'flyd'
import { TransportState } from '../types'
import { Observable } from './components'

export const state: TransportState = {
  bpm: stream(120),
  time: stream(0),
  transportTime: TransportTime(),
  state: stream(Transport.state),
}

Transport.scheduleRepeat(time => {
  Draw.schedule(() => {
    state.time(state.transportTime.toBarsBeatsSixteenths())
    state.bpm(Transport.bpm.value)
  }, time)
}, '.02')

function TransportStarted(e) {
  state.state('started')
  console.log(state.state(), e)
}
function TransportStopped(e) {
  state.state('stopped')
  console.log(state.state(), e)
}
function TransportPause(e) {
  state.state('paused')
  console.log(state.state(), e)
}
Transport.on('start', TransportStarted)
Transport.on('stop', TransportStopped)
Transport.on('pause', TransportPause)

export const Start = m('input[type=button]', {
  value: '>',
  onclick: () => {
    Transport.start()
  },
})
export const Stop = m('input[type=button]', {
  value: '■',
  onclick: () => Transport.stop(),
})
export const Pause = m('input[type=button]', {
  value: '||',
  onclick: () => Transport.pause(),
})

export const TransportControls = [Stop, Pause, Start, m(Observable(state.time))]
