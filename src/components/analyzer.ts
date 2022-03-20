import m from 'mithril'

import { BrowserOscilloscope } from './oscillopscope'

export const AnalyzerStyle = '.bg-purple.flex'
export const AnalyzerContents = [
  m('div#oscilloscope.fl.w-third', BrowserOscilloscope()),
]

export const DefaultAnalyzerView = () => {
  return {
    view: vnode => m(AnalyzerStyle, AnalyzerContents),
  }
}
