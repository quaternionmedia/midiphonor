import m from 'mithril'
import { Piano } from 'nexusui'
import { playNote } from './note'
import { mapMidiKeyToFrequency } from '../../utils/music'

// TODO: move synth access to state
import { polySynth as synth } from './note'

// Generic synth view with presets
// TODO: move parameters & synth to state for component access
export const Synth = {
  oncreate: ({ dom }) => {
    let piano = new Piano(dom, {
      size: [window.innerWidth, window.innerWidth / 10],
      mode: 'button', // 'button', 'toggle', or 'impulse'
      lowNote: 30,
      highNote: 97,
    })

    piano.on('change', function (v) {
      console.log(v)
      if (v.state) {
        // TODO: remove static 8n duration
        playNote(synth, mapMidiKeyToFrequency(v.note), '8n')
      }
    })
  },
  view: () => m(''),
}
