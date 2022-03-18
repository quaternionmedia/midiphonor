import m from 'mithril'
import { Synth } from 'tone'

export function playNote(pitch, duration){
  const synth = new Synth().toDestination()
  synth.triggerAttackRelease(pitch, duration)
}

export const Note = () => {
  return {
    view: vnode =>
      m('input[type=button]', {
        value: 'c3',
        onclick: e => {
          playNote('c3', '8n')
        },
      }),
  }
}
