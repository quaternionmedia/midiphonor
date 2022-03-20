import m from 'mithril'
import { Transport } from 'tone'
import { TransportControls } from './transportControls'
import { ViewportGlobals } from './viewport'
import { ComponentGlobals } from './component'
import { Bpm, BpmDial } from './bpm'

export const TransportViewStyle = `.ma1${ViewportGlobals}`
export const TransportStyle = `.white.bg-black.br4.pa5.pv4.tc${ComponentGlobals}`

export const TransportViewContents = [
  m(TransportViewStyle, `transport view - ${Transport}`),
  m(TransportViewStyle, m(Bpm)),
  m('div#bpmdial.h2.w2.bg-purple', BpmDial()),
]

export const TransportView = () => {
  return {
    view: vnode => m(TransportViewStyle, TransportViewContents),
  }
}

export const GlobalTransports = [m(TransportView), ...TransportControls()]

export const DefaultTransportView = {
  view: vnode => m(TransportStyle, GlobalTransports),
}
