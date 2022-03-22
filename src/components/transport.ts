import m from 'mithril'
import { Transport, Draw } from 'tone'
import { TransportClock } from './clock'
import './transport.css'
import { Observable } from './components'
import { state } from '../state'

Transport.scheduleRepeat(time => {
  Draw.schedule(() => {
    state.time(state.transportTime.toBarsBeatsSixteenths())
    let bbs = state.time().split(':')
    state.bars(Number(bbs[0]))
    state.beats(Number(bbs[1]))
    state.sixteenths(Number(bbs[2]).toFixed(2))
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
export const PlayPause = {
  oncreate: vnode => {
    state.state.map(s => {
      console.log('changing play button', s, vnode)
      m.render(vnode.dom, s == 'started' ? Pause : Start)
    })
  },
  view: () => m(''),
}
export const TransportControls = [
  Stop,
  m(PlayPause),
  m(Observable(state.time)),
  TransportClock,
]
