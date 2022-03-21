import m from 'mithril'
import { Transport } from 'tone'
import { state } from './transport'
import { Observable } from './components'

export const BpmInc = m('input[type=button]', {
  value: '+',
  onclick: () => {
    let bpm = Transport.bpm.value + 10
    Transport.bpm.rampTo(bpm, 1)
  },
})
export const BpmDec = m('input[type=button]', {
  value: '-',
  onclick: () => {
    let bpm = Transport.bpm.value - 10
    Transport.bpm.rampTo(bpm, 1)
  },
})

export const Bpm = [BpmDec, m(Observable(state.bpm)), BpmInc]
