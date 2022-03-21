import m from 'mithril'
import { c } from './component'
import { vp } from './viewport'
import { Destination } from 'tone'
import { Meter } from 'nexusui'
import { Accent, Fill, ButtonStyle, AnalyzerStyle, gx, gy } from './ui'

export const Style = `${ButtonStyle}#meter`
export const ViewStyle = `span#meter${AnalyzerStyle}`

export const BrowserMeter = c(Style, {
  value: 'new meter',
  onclick: () => {
    var meter = new Meter('#meter', {
      size: [gx, gy],
    })
    meter.colorize('accent', Accent)
    meter.colorize('fill', Fill)
    meter.connect(Destination)
  },
})

export const MeterContents = [BrowserMeter.v()]

export const MeterView = vp(ViewStyle, MeterContents)
