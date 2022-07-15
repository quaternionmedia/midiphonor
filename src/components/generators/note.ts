import m from 'mithril'
import { PolySynth, now } from 'tone'
import { Button as ButtonUi } from 'construct-ui'
import { Button } from 'nexusui'
import { mapValue } from '../utils/maths'

//define polysynth
let polySynth = new PolySynth().toDestination()

export function mapMidiKeyToFrequency(midiKey) {
  return 440 * Math.pow(2, (midiKey - 69) / 12)
}

export function playNote(
  dest = polySynth,
  note = chooseNoteAndOctaveRandomly(),
  duration = chooseDurationRandomly(),
  time = now()
) {
  // console.log()
  dest.triggerAttackRelease(mapMidiKeyToFrequency(note), duration, time)
}

export function chooseDurationRandomly() {
  let allDurations = ['1n', '2n', '4n', '8n', '16n', '32n', '64n']
  return allDurations[Math.floor(Math.random() * allDurations.length)]
}

export function chooseNoteAndOctaveRandomly() {
  //array with all the notes
  let allNotes = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
  ]
  //array with all octaves
  let allOctaves = [2, 3, 4, 5, 6, 7]
  //randomly choose a note and concat to octave
  let randomNote = allNotes[Math.floor(Math.random() * allNotes.length)]
  let randomOctave = allOctaves[Math.floor(Math.random() * allOctaves.length)]
  //return the note
  return randomNote + randomOctave
}

// export const Note = m(ButtonUi, {
//   label: 'play random note',
//   onclick: e => {
//     playNote()
//   },
// })

export function CreateNoteJoystick(size = [100, 100], i = 1) {
  let buttonId = `#noteJoystick${i.toString()}`
  return m('', {}, [
    m('h5', 'noteJoystick'),
    m(buttonId, {
      oncreate: vnode => {
        let noteJoystick = new Button(buttonId, {
          size: size,
          label: 'start',
        })
        noteJoystick.on('change', function (v) {
          console.log('tap', v)
          let note = mapValue(v.y, 0, 1, 33, 87)
          var duration = '8n'
          if (v.x < 0.2) {
            duration = '64n'
          } else if (v.x < 0.4) {
            duration = '32n'
          } else if (v.x < 0.6) {
            duration = '16n'
          } else if (v.x < 0.8) {
            duration = '8n'
          } else if (v.x < 1) {
            duration = '4n'
          }
          playNote(polySynth, note, duration)
        })
      },
    }),
  ])
}
