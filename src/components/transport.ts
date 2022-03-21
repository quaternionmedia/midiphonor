import { Transport } from 'tone'
import { tControlView } from './transportControls'
import { vp } from './viewport'
import { c } from './component'
import { BpmView } from './bpm'
import { TimeButton } from './time'

export const Style = '.white.bg-black.br2.pa2.pv2.tc'
export const ViewStyle = '.bg-navy'

export const Title = c(Style, `transport - ${Transport}`)

export const TransportViewContents = [
  Title.v(),
  BpmView().v(),
  tControlView().v(),
]

export const TransportView = vp(ViewStyle, TransportViewContents)
