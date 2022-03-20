import m from 'mithril'
import { Synth } from 'tone'
import { Note } from './note'
import { ViewportGlobals } from './viewport'
import { BrowserPiano } from './piano'
import { BrowserSequencer, ToggleSequencer } from './sequencer'

export const SynthStyle = `.dark-blue.bg-light-blue.outline${ViewportGlobals}`

export const SynthContents = [
  m(SynthStyle, 'Synth'),
  m(
    `div#piano.green.bg-dark-green.w-third.ma4${ViewportGlobals}`,
    BrowserPiano()
  ),
  m(
    `div#sequencer.green.bg-dark-green.w-third.ma5${ViewportGlobals}`,
    BrowserSequencer()
  ),
  //   m(`div#sequencerToggle.bg-orange`, ToggleSequencer()),
]

export const DefaultSynthView = () => {
  return {
    view: vnode => m(SynthStyle, SynthContents),
  }
}
