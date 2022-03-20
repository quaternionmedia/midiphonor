import m from 'mithril'

import { DefaultScheduleView } from './components/schedule'
import { DefaultSynthView } from './components/synth'
import { DefaultTransportView } from './components/transport'
import { DefaultUiView, UiGlobals } from './components/ui'
import { DefaultAnalyzerView } from './components/analyzer'

export const HomeStyle = '.bg-black.aspect-ratio--object.z-0'

export const DefaultHomeView = [
  m(UiGlobals, DefaultUiView),
  m(DefaultTransportView),
  m(DefaultScheduleView),
  m(DefaultSynthView),
  m(DefaultAnalyzerView),
]

export const Home = {
  view: vnode => m(HomeStyle, DefaultHomeView),
}

m.route(document.body, '/', {
  '/': Home,
})
