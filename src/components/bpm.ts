import m from 'mithril'
import { Transport } from 'tone'
import { Observable } from './components'
import { NDecimal } from '../utils'
import { Button, ControlGroup } from 'construct-ui'
import { Stream } from '../types'

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

export const BpmValue = (bpm: Stream<Number>) => m(Observable(NDecimal(bpm, 1)))

export const Bpm = ({ bpm }) =>
  m(ControlGroup, { class: 'container' }, [BpmDec, BpmValue(bpm), BpmInc])
