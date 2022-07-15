import m from 'mithril'
import { Transport } from 'tone'
import { state } from '../../state'
import { Observable, Container } from '../../components'
import { Button } from 'construct-ui'
import { Dial } from 'nexusui'
import { mapValueToNearestFive } from '../utils/maths'
import { now } from 'tone'
import { sequencer } from './sequencer'

export function BPMtoMS(bpm: number) {
  return bpm * 60 * 1000
}

export function MStoBPM(ms: number) {
  return ms / (60 * 1000)
}

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

export const BpmDial = m('', {}, [
  m('#bpmdial', {
    label: 'BPM',
    oncreate: vnode => {
      let bpmDial = new Dial('#bpmdial', {
        size: [75, 75],
        interaction: 'radial', // "radial", "vertical", or "horizontal"
        mode: 'relative', // "absolute" or "relative"
        min: 0,
        max: 1,
        step: 0,
        value: 0,
      })
      bpmDial.on('change', function (dialN) {
        Transport.bpm.value = mapValueToNearestFive(dialN, 0, 1, 1, 300)
        // sequencer.interval.ms(BPMtoMS(Transport.bpm.value))
      })
    },
  }),
])

export const Bpm = m(Container, {}, [
  BpmDial,
  BpmDec,
  m(Observable(state.bpm)),
  BpmInc,
])
