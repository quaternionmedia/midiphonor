import m from 'mithril'
import { Oscilloscope } from 'nexusui'
import { Destination } from 'tone'
import { Container } from '../../components'

export function CreateOscilloscopeView(
  size = [100, 100],
  fill = '#127',
  accent = '#177'
) {
  return m('', {}, [
    m('h4', 'Oscilloscope'),
    m('#oscilloscope', {
      oncreate: vnode => {
        let oscilloscope = new Oscilloscope('#oscilloscope', {
          size: size,
        })
        oscilloscope.colorize('fill', fill)
        oscilloscope.colorize('accent', accent)

        oscilloscope.connect(Destination)
      },
    }),
  ])
}

export const OscilloscopeGroup = m(Container, {}, CreateOscilloscopeView())
