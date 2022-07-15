import m from 'mithril'
import { Spectrogram } from 'nexusui'
import { Destination } from 'tone'
import { Container } from '../../components'

export function CreateSpecrumView(
  size = [100, 100],
  fill = '#127',
  accent = '#177'
) {
  return m('', {}, [
    m('h4', 'Spectrogram'),
    m('#spectrogram', {
      oncreate: vnode => {
        let spectrogram = new Spectrogram('#spectrogram', {
          size: size,
        })
        spectrogram.colorize('fill', fill)
        spectrogram.colorize('accent', accent)

        spectrogram.connect(Destination)
      },
    }),
  ])
}

export const SpectrumGroup = m(Container, {}, CreateSpecrumView())
