import m from 'mithril'
import { Note } from './components/note'
import { TransportControls } from './components/transport'
import { Bpm } from './components/bpm'
import { Menu } from './components/menu'
import '../node_modules/construct-ui/lib/index.css'
import { state } from './state'

export const Home = {
  view: vnode => [m(Menu), Bpm(state), TransportControls, Note],
}

m.route(document.body, '/', {
  '/': Home,
})
