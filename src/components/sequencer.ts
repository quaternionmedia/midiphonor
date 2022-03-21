import m from 'mithril'

import { Sequencer, Button } from 'nexusui'
import { playNote } from './note'

export const ToggleSequencer = () =>
  m('input[type=button].w-auto.h-auto', {
    value: 'toggle sequencer',
    onclick: () => {
      var button = Button('#toggleSequencer', {
        size: [80, 80],
        mode: 'aftertouch',
        state: false,
      })
      button.on('change', function (v) {
        // v is the value of the button
        console.log(v)
      })
    },
  })

export const BrowserSequencer = () =>
  m('input[type=button].w-auto.h-auto', {
    value: 'new sequencer',
    onclick: () => {
      var sequencer = new Sequencer('#sequencer', {
        size: [300, 300],
        mode: 'toggle',
        rows: 4,
        columns: 4,
        paddingRow: 5,
        paddingColumn: 5,
      })
      console.log(sequencer)

      sequencer.on('change', function (v) {
        console.log(v)
        playNote(v.row * v.column + 50, '8n')
      })

      sequencer.on('step', function (v) {
        playNote(50 + v.row, '8n')
      })
    },
  })