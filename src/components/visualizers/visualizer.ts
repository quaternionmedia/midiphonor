import m from 'mithril'
import { Grid } from 'construct-ui'

import { Meter } from './meter'
import { Oscilloscope } from './oscilloscope'
import { Spectrogram } from './spectrogram'

export const Visualizer = {
  oncreate: ({ dom }) => {},
  view: () =>
    //TODO: move grid settings to theme in state
    m(
      Grid,
      {
        gutter: 30,
        align: 'center',
        justify: 'center',
      },
      [m(Meter), m(Oscilloscope), m(Spectrogram)]
    ),
}
