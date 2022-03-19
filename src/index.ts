import m from 'mithril'
import { Note } from './components/note'
import { TransportControls, Bpm } from './components/transport'
import { Looper } from './components/loop'

export const Home = {
  view: vnode => [Bpm(), TransportControls(), m(Note), m(Looper)],
}

m.route(document.body, '/', {
  '/': Home,
})
