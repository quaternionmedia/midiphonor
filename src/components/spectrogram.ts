import { c } from './component'
import { vp } from './viewport'
import { Destination } from 'tone'
import { Spectrogram } from 'nexusui'
import { Accent, Fill, ButtonStyle, AnalyzerStyle, gx, gy } from './ui'

export const Style = `${ButtonStyle}#spectrogram`
export const ViewStyle = `span#spectrogram${AnalyzerStyle}`

export const BrowserSpectrogram = c(Style, {
  value: 'spectrogram',
  onclick: () => {
    var spectrogram = new Spectrogram('#spectrogram', {
      size: [gx, gy],
    })
    spectrogram.colorize('accent', Accent)
    spectrogram.colorize('fill', Fill)
    spectrogram.connect(Destination)
    console.log(spectrogram)
  },
})

export const SpectrogramContents = [BrowserSpectrogram.v()]

export const SpectrogramView = vp(ViewStyle, SpectrogramContents)
