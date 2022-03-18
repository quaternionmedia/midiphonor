import m from 'mithril'
import { Transport } from 'tone'
export const TransportView = () => {
  return {
    view: vnode => ['q = ', m('span', {}, Transport.bpm.value)],
  }
}

export const Bpm = () => [BpmDec(), m('', {}, Transport.bpm.value), BpmInc()]
export const TransportControls = () => [Stop(), Pause(), Start(), CurrentTime(t)]
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

