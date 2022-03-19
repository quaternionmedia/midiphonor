import m from 'mithril'
import { Transport, Draw } from 'tone'
import { stream, map } from 'flyd'

type Stream = typeof stream

const bpm = stream(Transport.bpm.value)
const t = stream(0)

export const Bpm = () => [BpmDec(), m(Observable(bpm)), BpmInc()]

Transport.scheduleRepeat(time => {
  Draw.schedule(() => {
    console.log('drawing', time)
    time = Number(time.toFixed(2))
    t(time)
    bpm(Transport.bpm.value)
  }, time)
  console.log('transport time', time)
}, '.02')

export const TransportControls = {
  view: () => m('', {}, [Stop(), Pause(), Start(), m(Observable(t))]),
}

export const BpmInc = () =>
  m('input[type=button]', {
    value: '+',
    onclick: () => Transport.bpm.rampTo(Transport.bpm.value + 1, 1),
  })
export const BpmDec = () =>
  m('input[type=button]', {
    value: '-',
    onclick: () => Transport.bpm.rampTo(Transport.bpm.value - 1, 1),
  })
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
export const Observable = (s: Stream) => {
  return {
    oncreate: vnode => {
      map(value => {
        m.render(vnode.dom, value)
      }, s)
    },
    view: () => m('', {}, s()),
  }
}
