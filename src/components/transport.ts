import m from 'mithril'
import { Transport } from 'tone'
import { TransportClock } from './clock'
import './transport.css'
import { o, Container } from './components'
import { Button } from 'construct-ui'

export const Stop = {
  view: ({ attrs }) =>
    m(Button, {
      label: '■',
      onclick: () => Transport.stop(),
      ...attrs,
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
