import m from 'mithril'
import { Note } from './components/generators/note'
import { TransportControls } from './components/transports/transport'
import { Bpm } from './components/transports/bpm'
import { Menu } from './components/menu'
import { State } from './components/state'
import { Synth } from './components/generators/synth'
import { states, update } from './state'
import { Actions } from './actions'
import { Transport, Draw } from 'tone'
import { Visualizer } from './components/visualizers/visualizer'
import { SequencerGroup } from './components/generators/sequencer'
import '../node_modules/construct-ui/lib/index.css'

const actions = Actions(update, states)

export const Midiphonor = {
  oninit: ({ attrs: { state, actions } }) => {
    Transport.scheduleRepeat(time => {
      Draw.schedule(() => {
        let timeString = state().transportTime.toBarsBeatsSixteenths()
        actions.clockTick(timeString)
      }, time)
    }, '.02')
  },
  view: ({ attrs: { state } }) => [
    m(Menu, { state }),
    m(Bpm, { state }),
    m(TransportControls, { state }),
    m(Note),
    m(SequencerGroup),
    m(Synth),
    m(Visualizer),
    m(State, { state }),
  ],
}

m.route(document.body, '/', {
  '/': {
    view: () => m(Midiphonor, { state: states, actions }),
  },
})
