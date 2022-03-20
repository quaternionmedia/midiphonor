import m from 'mithril'
import { Destination } from 'tone'
import { Oscilloscope } from 'nexusui'

export const BrowserOscilloscope = () =>
  m('input[type=button].w-auto.h-auto', {
    value: 'new oscilloscope',
    onclick: () => {
      var oscilloscope = new Oscilloscope('#oscilloscope')

      oscilloscope.connect(Destination)
      console.log(oscilloscope)
    },
  })
