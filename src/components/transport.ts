import m from 'mithril'
import { Transport, Draw } from 'tone'
import { TransportClock } from './clock'
import './transport.css'
import { Observable } from './components'
import { state } from '../state'

Transport.scheduleRepeat(time => {
  Draw.schedule(() => {
    // console.log('drawing', time, state)
    state.time(state.transportTime.toBarsBeatsSixteenths())
    let bbs = state.time().split(':')
    state.bars(Number(bbs[0]))
    state.beats(Number(bbs[1]))
    state.sixteenths(Number(bbs[2]))
    state.bpm(Transport.bpm.value)
    // state.state(Transport.state)
  }, time)
  // console.log('transport time', time)
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

export const Button = {
  view: vnode => m('.button', vnode.attrs, vnode.children),
}

export const Start = {
  view: vnode =>
    m(
      Button,
      {
        onclick: () => {
          Transport.start()
        },
        ...vnode.attrs,
      },
      '>'
    ),
}

export const Stop = {
  view: vnode =>
    m(
      Button,
      {
        onclick: () => Transport.stop(),
      },
      '■'
    ),
}
export const Pause = {
  view: vnode =>
    m(
      Button,
      {
        onclick: () => Transport.pause(),
      },
      '| |'
    ),
}

export const PlayPause = state => ({
  oncreate: vnode => {
    state.state.map(s => {
      console.log('changing play button', s, vnode)
      m.render(vnode.dom, s == 'started' ? m(Pause) : m(Start))
    })
  },
  view: vnode => m('', vnode.attrs),
})


export const TransportControls = m('.container', [
  TransportClock,
  m(Stop),
  m(PlayPause(state)),
])
