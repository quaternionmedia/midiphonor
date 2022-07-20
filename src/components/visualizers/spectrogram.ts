import m from 'mithril'
import { Spectrogram as NexusSpectrogram } from 'nexusui'
import { Destination } from 'tone'

// Spectrogram view for visualizing fft of audio output
// Will present as a fft of meter's connection.
export const Spectrogram = {
  oncreate: ({ dom }) => {
    let spectrogram = new NexusSpectrogram(dom, {
      size: [window.innerWidth / 3, window.innerWidth / 9],
    })
    // TODO: move colors to theme in state
    spectrogram.colorize('fill', '#127')
    spectrogram.colorize('accent', '#177')

    // defaults source of spectrogram to global output
    // TODO: move destination to state so it can be selectable
    spectrogram.connect(Destination)
  },
  view: () => m(''),
}
