import m from 'mithril'
import { Transport } from 'tone'
import { TransportClock } from './clock'
import './transport.css'
import { Container } from '../components'
import { Button } from 'construct-ui'

export const LABELS = {
  started: '| |',
  stopped: '>',
  paused: '>',
}

export const Stop = {
  view: ({ attrs }) =>
    m(Button, {
      label: '■',
      onclick: () => Transport.stop(),
      ...attrs,
    }),
}

export const PlayPause = {
  view: ({ attrs: { cell } }) =>
    m(Button, {
      label: cell.state.state,
      onclick: () => {
        console.log('clicked PlayPause', cell, cell.state.state)
        if (cell.state.state == 'started') {
          Transport.pause()
        } else {
          Transport.start()
        }
      },
    }),
}

export const TransportControls = {
  view: ({ attrs: { cell } }) =>
    m(Container, {}, [
      m(TransportClock, { cell }),
      m(Stop),
      m(PlayPause, { cell }),
    ]),
}
