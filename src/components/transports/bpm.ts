import m from 'mithril'
import { Transport } from 'tone'
import { o } from '../components'
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

export const BpmSlider = {
  view: () =>
    m('input[type=range]', {
      min: 1,
      max: 200,
      value: Transport.bpm.value,
      oninput: ({ target }) => {
        let newBpm = Number(target.value)
        console.log('bpm slider', newBpm)
        Transport.set({ bpm: newBpm })
      },
    }),
}
export const NDecimal = (s: number, digits: number) => s.toFixed(digits)
export const BpmValue = (bpm: number) => m(NDecimal(bpm, 1))

export const Bpm = {
  view: ({ attrs: { state } }) =>
    m(ControlGroup, { class: 'container' }, [
      BpmDec,
      o(state().bpm),
      BpmInc,
      m(BpmSlider, { state }),
    ]),
}
