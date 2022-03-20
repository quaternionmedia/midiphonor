import m from 'mithril'

import { BrowserOscilloscope } from './oscillopscope'
import { BrowserMeter } from './meter'
import { BrowserSpectrogram } from './spectrogram'

export const AnalyzerStyle = '.bg-purple.flex'
export const AnalyzerContents = [
  m('#oscilloscope.w-third', BrowserOscilloscope()),
  m('#meter.w-third', BrowserMeter()),
  m('#spectrogram.w-third', BrowserSpectrogram()),
]

export const DefaultAnalyzerView = () => {
  return {
    view: vnode => m(AnalyzerStyle, AnalyzerContents),
  }
}
