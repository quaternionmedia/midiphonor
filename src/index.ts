import m from 'mithril'
import { Synth } from 'tone'

export const Home = () => {
  return {
    view: (vnode) =>
      m('input[type=button]', {
        value: 'start',
        onclick: (e) => {
          const synth = new Synth().toDestination()
          synth.triggerAttackRelease('c4', '8n')
        },
      }),
  }
}

m.route(document.body, '/', {
  '/': Home,
})
