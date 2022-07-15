import { m } from 'mithril'
import { Container } from '../../components'

import { OscilloscopeGroup } from './oscilloscope'
import { SpectrumGroup } from './spectrogram'
import { MeterGroup } from './meter'

export const VisualizerGroup = m(Container, {}, [
  OscilloscopeGroup,
  SpectrumGroup,
  MeterGroup,
])
