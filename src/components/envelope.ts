import { c } from './component'
import { vp } from './viewport'
import { Destination } from 'tone'
import { Envelope } from 'nexusui'
import { Accent, Fill, ButtonStyle, AnalyzerStyle, gx, gy } from './ui'

export const Style = `${ButtonStyle}#envelope`
export const ViewStyle = `span#envelope${AnalyzerStyle}`

export const BrowserEnvelope = c(Style, {
  value: 'new envelope',
  onclick: () => {
    var envelope = new Envelope('#envelope', {
      size: [gx, gy],
      noNewPoints: false,
      points: [
        {
          x: 0.1,
          y: 0.4,
        },
        {
          x: 0.35,
          y: 0.6,
        },
        {
          x: 0.65,
          y: 0.2,
        },
        {
          x: 0.9,
          y: 0.4,
        },
      ],
    })
    envelope.colorize('accent', Accent)
    envelope.colorize('fill', Fill)

    envelope.connect(Destination)
    console.log(envelope)

    envelope.on('change', function (v) {
      console.log(v)
    })
  },
})

export const EnvelopeContents = [BrowserEnvelope.v()]

export const EnvelopeView = vp(ViewStyle, EnvelopeContents)
