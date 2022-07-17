import m from 'mithril'
import { Note } from './components/note'
import { TransportControls } from './components/transport'
import { Bpm } from './components/bpm'
import { Menu } from './components/menu'
import { State } from './state'
import '../node_modules/construct-ui/lib/index.css'
import { states, update } from './state'
import { Actions } from './actions'
import { Transport, Draw } from 'tone'

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
    Note,
    m(State, { state }),
  ],
}

m.route(document.body, '/', {
  '/': {
    view: () => m(Midiphonor, { state: states, actions }),
  },
})
// states.map(() => m.redraw())
