import m from 'mithril'
import { Destination } from 'tone'
import { Meter } from 'nexusui'

export const BrowserMeter = () =>
  m('input[type=button].w-auto.h-auto', {
    value: 'new meter',
    onclick: () => {
      var meter = new Meter('#meter')

      meter.connect(Destination)
      console.log(meter)
    },
  })
