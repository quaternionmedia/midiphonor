import m from 'mithril'
import { PolySynth, now } from 'tone'
import { Button as ButtonUi } from 'construct-ui'
// import { Button } from 'nexusui'
import {
  chooseDurationRandomly,
  chooseNoteAndOctaveRandomly,
} from '../../utils/music'

//define polysynth
let polySynth = new PolySynth().toDestination()

export function playNote(
  dest = polySynth,
  note = chooseNoteAndOctaveRandomly(),
  duration = chooseDurationRandomly(),
  time = now()
) {
  dest.triggerAttackRelease(note, duration, time)
}

export const Note = m(ButtonUi, {
  label: 'play random note',
  onclick: () => {
    playNote()
  },
})
