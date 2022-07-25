import m from 'mithril'
import { Transport } from 'tone'
import { o } from '../components'
import { Button, ControlGroup } from 'construct-ui'
import { NDecimal } from '../../utils/streams'

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
  oncreate: ({ dom, attrs: { cell } }) => {
    cell.getStream().bpm.map(v => {
      // console.log('bpm slider new value', v)
      dom.value = v
    })
  },
  view: ({ attrs: { cell } }) =>
    m('input.bpmslider[type=range]', {
      min: 1,
      max: 200,
      value: Transport.bpm.value,
      oninput: ({ target }) => {
        let newBpm = Number(target.value)
        Transport.set({ bpm: newBpm })
      },
    }),
}

export const Bpm = {
  view: ({ attrs: { cell } }) =>
    m(ControlGroup, { class: 'container' }, [
      BpmDec,
      o(NDecimal(cell.getStream().bpm, 1)),
      BpmInc,
      m(BpmSlider, { cell }),
    ]),
}
