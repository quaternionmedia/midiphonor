import m from 'mithril'
import { Transport } from 'tone'
import { state } from '../state'
import { Observable } from './components'
import { NDecimal } from '../utils'
import { Button, ControlGroup } from 'construct-ui'

export const BpmInc = m(Button, {
  label: '+',
  onclick: () => {
    let bpm = Transport.bpm.value + 10
    Transport.bpm.rampTo(bpm, 1)
  },
})
export const BpmDec = m(Button, {
  label: '-',
  onclick: () => {
    let bpm = Transport.bpm.value - 10
    Transport.bpm.rampTo(bpm, 1)
  },
})

export const Bpm = m(ControlGroup, { class: 'container' }, [
  BpmDec,
  m(Observable(NDecimal(state.bpm, 1))),
  BpmInc,
])
