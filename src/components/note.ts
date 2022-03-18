import m from 'mithril'
import { Synth } from 'tone'

export const Note = () => {
  const synth = new Synth().toDestination()

  return {
    view: vnode =>
      m('input[type=button]', {
        value: 'start',
        onclick: e => {
          synth.triggerAttackRelease('c4', '8n')
        },
      }),
  }
}
