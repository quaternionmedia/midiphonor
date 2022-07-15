import m from 'mithril'
import { Transport, Draw } from 'tone'
import { TransportClock } from './clock'
import './transport.css'
import { o, Container } from './components'
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
  view: ({ attrs: { state } }) =>
    m(Button, {
      label: o(state().state),
      onclick: () => {
        console.log('clicked PlayPause')
        if (state().state() == 'started') {
          Transport.pause()
        } else {
          Transport.start()
        }
      },
    }),
}

export const TransportControls = {
  view: ({ attrs: { state } }) =>
    m(Container, {}, [
      m(TransportClock, { state }),
      m(Stop),
      m(PlayPause, { state }),
    ]),
}
