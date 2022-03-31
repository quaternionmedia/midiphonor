import m from 'mithril'
import { Transport, Draw } from 'tone'
import { TransportClock } from './clock'
import './transport.css'
import { Observable, Container } from './components'
import { state } from '../state'
import { Button } from 'construct-ui'

export const Start = {
  view: vnode =>
    m(Button, {
      label: '>',
      onclick: () => {
        Transport.start()
      },
      ...vnode.attrs,
    }),
}

export const Stop = {
  view: vnode =>
    m(Button, {
      label: '■',
      onclick: () => Transport.stop(),
      ...vnode.attrs,
    }),
}
export const Pause = {
  view: vnode =>
    m(Button, {
      label: '| |',
      onclick: () => Transport.pause(),
      ...vnode.attrs,
    }),
}

export const PlayPause = state => ({
  oncreate: vnode => {
    state.state.map(s => {
      console.log('changing play button', s, vnode)
      m.render(vnode.dom, s == 'started' ? m(Pause) : m(Start))
    })
  },
  view: vnode => m('', vnode.attrs),
})

export const TransportControls = m(Container, {}, [
  TransportClock(state),
  m(Stop),
  m(PlayPause(state)),
])
