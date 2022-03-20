import m from 'mithril'
import { Note } from './components/note'
import { TransportControls } from './components/transport'
import { Bpm } from './components/bpm'

export const Home = {
  view: vnode => [Bpm, m(TransportControls), m(Note)],
}

m.route(document.body, '/', {
  '/': Home,
})
