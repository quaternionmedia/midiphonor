import m from 'mithril'
import { Synth } from 'tone'

const synth = new Synth().toDestination()
export const Note = m('input[type=button]', {
  value: 'start',
  onclick: e => {
    synth.triggerAttackRelease('c4', '8n')
  },
})
