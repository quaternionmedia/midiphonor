import { m } from 'mithril'

import { Card } from 'construct-ui'
import { Button } from 'nexusui'
import { Container } from '../../components'
import { FMSynth, Loop, now } from 'tone'
import { playNote } from '../generators/note'

let synth = new FMSynth().toDestination()

export function CreateLooperButton(size = [40, 40], i = 1) {
  let buttonId = `#looperButton${i.toString()}`
  return m(Container, {}, [
    m(buttonId, {
      oncreate: vnode => {
        let looperButton = new Button(buttonId, {
          size: size,
        })
        let loop = new Loop(time => {
          playNote(synth, i + 32, '8n', now())
          playNote(synth, i + 36, '8n', '+8n')
          playNote(synth, i + 39, '8n', '+4n')
        }, '2n')
        looperButton.on('click', function (v) {
          //ternary operator to toggle loop on and off
          loop.state == 'stopped' ? loop.start(0) : loop.stop()
          console.log(loop.state)
          //set color of button based on state
          let buttonColor = loop.state == 'stopped' ? '#ff0000' : '#00ff00'
          looperButton.colorize('fill', buttonColor)
        })
      },
    }),
  ])
}

export function CreateLooperRow(x = 2, y = 1) {
  let buttons = []
  for (let k = 0; k < x; k++) {
    buttons.push(CreateLooperButton([40, 40], x * y + k))
  }
  return [m('', {}, buttons)]
}

export function CreateLooperGrid(y = 2) {
  let rows = []
  for (let n = 0; n < y; n++) {
    rows.push(CreateLooperRow(y, n))
  }
  return m('', {}, rows)
}

export const LooperGroup = m(Container, { fluid: true }, [
  m('h4', 'Looper'),
  m(Card, { fluid: true }, [CreateLooperGrid(8)]),
])
