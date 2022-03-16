import m from 'mithril'
import { Synth } from 'tone'

export const Home = () => {
  function init() {
    const synth = new Synth().toDestination()
    synth.triggerAttackRelease('c4', '8n')
  }
  return {
    view: vnode => m('input[type=button]', {
      value: 'start',
      onclick: e => {
        init()
      }
    })
  }
}

m.route(document.body, '/', {
  '/': Home,
})
