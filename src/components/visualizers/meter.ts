import m from 'mithril'
import { Meter as NexusMeter } from 'nexusui'
import { Destination } from 'tone'

// Meter view for measuring audio output
// Will present as 2 bars for each L and R of meter's connection.
export const Meter = {
  oncreate: ({ dom }) => {
    let meter = new NexusMeter(dom, {
      size: [window.innerWidth / 3, window.innerWidth / 9],
    })
    // TODO: move colors to theme in state
    meter.colorize('fill', '#127')
    meter.colorize('accent', '#177')

    // defaults source of meter to global output
    // TODO: move destination to state so it can be selectable
    meter.connect(Destination)
  },
  view: () => m(''),
}
