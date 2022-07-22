import m from 'mithril'
import { Note } from './components/generators/note'
import { TransportControls } from './components/transports/transport'
import { Bpm } from './components/transports/bpm'
import { Menu } from './components/menu'
import { State } from './components/state'
import { Synth } from './components/generators/synth'
import { cells } from './state'
import { Actions } from './actions'
import { Transport, Draw } from 'tone'
import { Visualizer } from './components/visualizers/visualizer'
import '../node_modules/construct-ui/lib/index.css'

const actions = Actions(update, states)

export const Midiphonor = {
  oninit: ({ attrs: { cell, Actions } }) => {
    Transport.scheduleRepeat(time => {
      Draw.schedule(() => {
        let timeString = cell.state.transportTime.toBarsBeatsSixteenths()
        Actions.clockTick(cell, timeString)
      }, time)
    }, '.02')
  },
  view: ({ attrs: { cell } }) => [
    m(Menu, { cell }),
    // m(Bpm, { cell }),
    m(TransportControls, { cell }),
    // m(Note),
    // m(Synth),
    // m(Visualizer),
    m(State, { cell }),
  ],
}

m.route(document.body, '/', {
  '/': {
    view: () => m(Midiphonor, { cell: cells(), Actions }),
  },
})
