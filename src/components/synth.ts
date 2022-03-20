import m from 'mithril'
import { Synth } from 'tone'
import { Note } from './note'
import { ViewportGlobals } from './viewport'
import { BrowserPiano } from './piano'
import { BrowserSequencer, ToggleSequencer } from './sequencer'

export const SynthStyle = `.dark-blue.bg-light-blue.outline.flex${ViewportGlobals}`

export const SynthContents = [
  m(SynthStyle, 'Synth'),
  m(
    `div#piano.green.bg-dark-green.fl.w-third.pa2${ViewportGlobals}`,
    BrowserPiano()
  ),
  m(
    `div#sequencer.green.bg-dark-green.w-third.pa2${ViewportGlobals}`,
    BrowserSequencer()
  ),
  //   m(`div#sequencerToggle.bg-orange`, ToggleSequencer()),
]

export const DefaultSynthView = () => {
  return {
    view: vnode => m(SynthStyle, SynthContents),
  }
}
