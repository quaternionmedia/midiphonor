import m from 'mithril'
import {} from './schedule'
import { Transport } from 'tone'

import { ViewportGlobals } from './viewport'

export const TransportViewStyle = `.ma1${ViewportGlobals}`

export const buttonStyle = `input[type=button]\
              .light-gray.bg-mid-gray\
              .br1.tc.ba.bw1.shadow-1\
              .ma3.ph3\
              ${ViewportGlobals}`

export const TransportControls = () => [
  Stop(),
  Pause(),
  Start(),
  Toggle(),
  CurrentTime(),
]

export const Start = () =>
  m(buttonStyle, {
    value: '>',
    onclick: () => {
      Transport.start()
    },
  })
export const Stop = () =>
  m(buttonStyle, {
    value: '■',
    onclick: () => Transport.stop(),
  })
export const Pause = () =>
  m(buttonStyle, {
    value: '||',
    onclick: () => Transport.pause(),
  })
export const Toggle = () =>
  m(buttonStyle, {
    value: '>/||',
    onclick: () => Transport.toggle(),
  })

export const CurrentTime = () => m('', {}, Transport.seconds)
