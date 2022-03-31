import m from 'mithril'
import { Transport, Draw } from 'tone'
import { TransportClock } from './clock'
import './transport.css'
import { Observable, Container } from './components'
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

export const PlayPause = {
  oncreate: ({ dom, attrs: { state } }) => {
    console.log('init PlayPause', state)
    state().state.map(s => {
      m.render(dom, s == 'started' ? m(Pause) : m(Start))
    })
  },
  view: ({ attrs: { state } }) =>
    state.state == 'started' ? m(Pause) : m(Start),
}

export const TransportControls = {
  view: ({ attrs: { state } }) =>
    m(Container, {}, [
      m(TransportClock, { state }),
      m(Stop),
      m(PlayPause, { state }),
    ]),
}
