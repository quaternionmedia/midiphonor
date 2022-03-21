import { c } from './component'
import { vp } from './viewport'
import { Destination } from 'tone'
import { Multislider } from 'nexusui'
import { Accent, Fill, ButtonStyle, AnalyzerStyle, gx, gy } from './ui'

export const Style = `${ButtonStyle}#multislider`
export const ViewStyle = `span#multislider${AnalyzerStyle}`

export const BrowserMultislider = c(Style, {
  value: 'new multislider',
  onclick: () => {
    var multislider = new Multislider('#multislider', {
      size: [gx, gy],
      numberOfSliders: 5,
      min: 0,
      max: 1,
      step: 0,
      candycane: 3,
      values: [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
      smoothing: 0,
      mode: 'bar', // 'bar' or 'line'
    })
    multislider.on('change', function (v) {
      console.log(v)
    })
    multislider.colorize('accent', Accent)
    multislider.colorize('fill', Fill)

    multislider.connect(Destination)
    console.log(multislider)

    multislider.on('change', function (v) {
      console.log(v)
    })
  },
})

export const MultisliderContents = [BrowserMultislider.v()]

export const MultisliderView = vp(ViewStyle, MultisliderContents)
