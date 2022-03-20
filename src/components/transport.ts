import m from 'mithril'
import { Transport, TransportTime, Draw } from 'tone'
import { stream } from 'flyd'
import { Observable } from './components'

type Stream = typeof stream


Transport.scheduleRepeat(time => {
  Draw.schedule(() => {
    console.log('drawing', time)
    t(transportTime.valueOf())
    bpm(Transport.bpm.value)
  }, time)
  console.log('transport time', time)
}, '.02')

export const TransportControls = {
  view: () => [Stop(), Pause(), Start(), m(Observable(state.time))],
}

export const Start = () =>
  m('input[type=button]', {
    value: '>',
    onclick: () => {
      Transport.start()
    },
  })
export const Stop = () =>
  m('input[type=button]', {
    value: '■',
    onclick: () => Transport.stop(),
  })
export const Pause = () =>
  m('input[type=button]', {
    value: '||',
    onclick: () => Transport.pause(),
  })
