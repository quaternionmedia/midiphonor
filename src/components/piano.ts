import m from 'mithril'

import { Piano } from 'nexusui'
import { playNote } from './note'

export const PianoGlobalStyle = '.z-1.o-10'

export const PianoStyle = '.dark-blue.bg-light-blue.outline.ba.br4'
export const WhiteKeyStyle = '.black.bg-white'
export const BlackKeyStyle = '.white.bg-black.ma2.center.outline'

export const BrowserPiano = () =>
  m('input[type=button].w-auto.h-auto', {
    value: 'new piano',
    onclick: () => {
      var piano = new Piano('#piano', {
        size: [500, 125],
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
