import m from 'mithril'

import { BrowserOscilloscope } from './oscillopscope'
import { BrowserMeter } from './meter'

export const AnalyzerStyle = '.bg-purple.flex'
export const AnalyzerContents = [
  m('#oscilloscope.fl.w-third', BrowserOscilloscope()),
  m('#meter.fl.w-third', BrowserMeter()),
]

export const DefaultAnalyzerView = () => {
  return {
    view: vnode => m(AnalyzerStyle, AnalyzerContents),
  }
}
