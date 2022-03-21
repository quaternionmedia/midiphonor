// import m from 'mithril'
import { c } from './component'
import { vp } from './viewport'
import { Transport } from 'tone'

export const Style = '.bg-purple'

export const buttonStyle = `input[type=button]\
              .light-gray.bg-mid-gray\
              .br1.tc.ba.bw1.shadow-1\
              .ma3.ph3`

export const TransportControls = () => [
  Stop.v(),
  Pause.v(),
  Start.v(),
  Toggle.v(),
]

export const tControlView = () => {
  return vp(Style, TransportControls())
}
export const Start = c(buttonStyle, {
  value: '>',
  onclick: () => {
    Transport.start()
  },
})
export const Stop = c(buttonStyle, {
  value: '■',
  onclick: () => Transport.stop(),
})
export const Pause = c(buttonStyle, {
  value: '||',
  onclick: () => Transport.pause(),
})
export const Toggle = c(buttonStyle, {
  value: '>/||',
  onclick: () => Transport.toggle(),
})
