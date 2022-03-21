import { vp } from './viewport'
import { c } from './component'

import { BrowserPiano } from './piano'
import { BrowserSequencer } from './sequencer'

export const Style = '.dark-blue.bg-light-blue'
export const ViewStyle = '.gold'

export const Title = c(Style, 'Synth')
export const Piano = c('#piano.green.bg-dark-green.w-third.mb4', BrowserPiano())
export const Sequencer = c(
  '#sequencer.green.bg-dark-green.w-third.mb5',
  BrowserSequencer()
)

export const SynthContents = [Title.v(), Piano.v(), Sequencer.v()]

export const SynthView = vp(ViewStyle, SynthContents)
