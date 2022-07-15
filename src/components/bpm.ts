import m from 'mithril'
import { Transport } from 'tone'
import { state } from '../state'
import { Observable, Container } from './components'

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

export const Bpm = m(Container, {}, [BpmDec, m(Observable(state.bpm)), BpmInc])
