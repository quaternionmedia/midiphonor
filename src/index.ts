import m from 'mithril'
import { Note } from './components/note'
import { TransportControls, Bpm} from './components/transport'

}


export const Home = {
  view: vnode => [
    Bpm(),
    TransportControls(),
    m(Note),
  ]
}


m.route(document.body, '/', {
  '/': Home,
})
