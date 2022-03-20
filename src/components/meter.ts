import m from 'mithril'
import { Destination } from 'tone'
import { Meter } from 'nexusui'

export const BrowserMeter = () =>
  m('input[type=button].w-auto.h-auto.bottom-0', {
    value: 'new meter',
    onclick: () => {
      var meter = new Meter('#oscilloscope')

      meter.connect(Destination)
      console.log(meter)
    },
  })
