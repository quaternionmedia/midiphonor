import m from 'mithril'

import { Note } from './components/generators/note'
import { TransportControls } from './components/transports/transport'
import { Bpm } from './components/transports/bpm'
import { SequencerGroup } from './components/transports/sequencer'
import { SynthGroup } from './components/generators/synth'
import { VisualizerGroup } from './components/visualizers/visualizer'
import { LooperGroup } from './components/transports/looper'

import '../node_modules/construct-ui/lib/index.css'
import './styles/midiphonor.css'

export const Home = {
  view: vnode => [
    Bpm,
    TransportControls,
    Note,
    SequencerGroup,
    SynthGroup,
    VisualizerGroup,
    LooperGroup,
  ],
}

m.route(document.body, '/', {
  '/': Home,
})
