import m from 'mithril'
import { PolySynth, now } from 'tone'
import { Button } from 'nexusui'
import {
  chooseDurationRandomly,
  chooseNoteAndOctaveRandomly,
} from '../../utils/music'

// TODO: move synth creation to state
let polySynth = new PolySynth().toDestination()

/**
  Play a note through a basic synth

  @param {dest} Synth Where to route the note
  @param {note} String The note to play, e.g. 'C4' - default random
  @param {duration} String The duration of note to play, e.g. '8n' for eight note
  @param {time} Time When to play the note
*/
export const playNote = (
  dest = polySynth,
  note = chooseNoteAndOctaveRandomly(),
  duration = chooseDurationRandomly(),
  time = now()
) => {
  dest.triggerAttackRelease(note, duration, time)
}

export const Note = {
  oncreate: ({ dom }) => {
    let button = new Button(dom, {
      label: 'play random note',
    })
    button.on('change', v => {
      console.log('changed button', v)
      if (v.state) {
        playNote()
      }
    })
  },
  view: () => m(''),
}
