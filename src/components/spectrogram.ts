import m from 'mithril'
import { Destination } from 'tone'
import { Spectrogram } from 'nexusui'

export const BrowserSpectrogram = () =>
  m('input[type=button].w-auto.h-auto', {
    value: 'new spectrogram',
    onclick: () => {
      var spectrogram = new Spectrogram('#spectrogram')

      spectrogram.connect(Destination)
      console.log(spectrogram)
    },
  })
