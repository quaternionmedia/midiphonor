import { c } from './component'
import { vp } from './viewport'
import { Destination } from 'tone'
import { Oscilloscope } from 'nexusui'
import { Accent, Fill, ButtonStyle, AnalyzerStyle, gx, gy } from './ui'

export const Style = `${ButtonStyle}#oscilloscope`
export const ViewStyle = `span#oscilloscope${AnalyzerStyle}`

export const BrowserOscilloscope = c(Style, {
  value: 'new oscilloscope',
  onclick: () => {
    var oscilloscope = new Oscilloscope('#oscilloscope', {
      size: [gx, gy],
    })
    oscilloscope.colorize('accent', Accent)
    oscilloscope.colorize('fill', Fill)

    oscilloscope.connect(Destination)
    console.log(oscilloscope)
  },
})

export const OscilloscopeContents = [BrowserOscilloscope.v()]

export const OscilloscopeView = vp(ViewStyle, OscilloscopeContents)
