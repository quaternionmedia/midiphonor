/**
Music related functions
*/

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

export function mapMidiKeyToFrequency(midiKey: number) {
  return 440 * Math.pow(2, (midiKey - 69) / 12)
}
