import m from 'mithril'
import { Note } from './components/note'

}


export const Home = {
  view: vnode => [
    m(Note),
  ]
}


m.route(document.body, '/', {
  '/': Home,
})
