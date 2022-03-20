import m from 'mithril'
import { Synth } from 'tone'
import { ComponentGlobals } from './component'

export const synth = new Synth().toDestination()

export const NoteStyle = `input[type=button]\
  .purple.bg-light-gray\
  .ml1.mr1.mt4.h5\
  .shadow-2.outline.ba\
  .grow\
  ${ComponentGlobals}`

export function playNote(pitch, duration, dest = synth) {
  dest.triggerAttackRelease(pitch, duration)
}

export const Note = (pitch, duration) => {
  return {
    view: vnode =>
      m(NoteStyle, {
        value: pitch,
        onclick: e => {
          playNote(pitch, duration)
        },
      }),
  }
}
