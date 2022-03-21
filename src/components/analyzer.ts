import { vp } from './viewport'

import { OscilloscopeView } from './oscillopscope'
import { MeterView } from './meter'
import { SpectrogramView } from './spectrogram'
import { EnvelopeView } from './envelope'
import { MultisliderView } from './multislider'

export const Style = '.gold.bg-purple'

export const AnalyzerContents = [
  OscilloscopeView.v(),
  MeterView.v(),
  SpectrogramView.v(),
  EnvelopeView.v(),
  MultisliderView.v(),
]

export const AnalyzerView = vp(Style, AnalyzerContents)
