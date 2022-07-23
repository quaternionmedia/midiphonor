import m from 'mithril'
import meiosisTracer from 'meiosis-tracer'

export const Tracer = {
  oncreate: ({ attrs: { cells } }) => {
    meiosisTracer({ selector: '#tracer', streams: [cells] })
  },
  view: () => m('#tracer'),
}
