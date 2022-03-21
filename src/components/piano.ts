import m from 'mithril'

import { Piano } from 'nexusui'
import { playNote } from './note'

import { Accent, Fill, ButtonStyle, AnalyzerStyle, gx, gy } from './ui'

export const BrowserPiano = () =>
  m('input[type=button].w-auto.h-auto', {
    value: 'new piano',
    onclick: () => {
      var piano = new Piano('#piano', {
        size: [500, 100],
        mode: 'button', // 'button', 'toggle', or 'impulse'
        lowNote: 30,
        highNote: 70,
      })
      console.log(piano)

      piano.on('change', function (v) {
        console.log(v)
        if (v.state) {
          playNote(v.note, '8n')
        }
      })
    },
  })
