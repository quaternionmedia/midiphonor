import m from 'mithril'

import { vp } from './components/viewport'

import { ScheduleView } from './components/schedule'
import { SynthView } from './components/synth'
import { TransportView } from './components/transport'
import { AnalyzerView } from './components/analyzer'

export const Style = '.bg-black.aspect-ratio--object.z-0'

export const HomeView = [
  TransportView.v(),
  ScheduleView.v(),
  SynthView.v(),
  AnalyzerView.v(),
]

export const Home = vp(Style, HomeView)

m.route(document.body, '/', {
  '/': Home,
})
