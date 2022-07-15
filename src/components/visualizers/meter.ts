import m from 'mithril'
import { Meter } from 'nexusui'
import { Destination } from 'tone'
import { Container } from '../../components'

export function CreateMeterView(
  size = [100, 100],
  fill = '#127',
  accent = '#177'
) {
  return m('', {}, [
    m('h4', 'Meter'),
    m('#meter', {
      oncreate: vnode => {
        let meter = new Meter('#meter', {
          size: size,
        })
        meter.colorize('fill', fill)
        meter.colorize('accent', accent)

        meter.connect(Destination)
      },
    }),
  ])
}

export const MeterGroup = m(Container, {}, CreateMeterView())
