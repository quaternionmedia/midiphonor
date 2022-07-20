import m from 'mithril'
import { Oscilloscope as NexusOscilloscope } from 'nexusui'
import { Destination } from 'tone'

// Oscilloscope view for visualizing waveform of audio output
// Will present as a waveform for sum of L and R of meter's connection.
export const Oscilloscope = {
  oncreate: ({ dom }) => {
    let oscilloscope = new NexusOscilloscope(dom, {
      size: [window.innerWidth / 3, window.innerWidth / 9],
    })
    // TODO: move colors to theme in state
    oscilloscope.colorize('fill', '#127')
    oscilloscope.colorize('accent', '#177')

    // defaults source of oscilloscope to global output
    // TODO: move destination to state so it can be selectable
    oscilloscope.connect(Destination)
  },
  view: () => m(''),
}
