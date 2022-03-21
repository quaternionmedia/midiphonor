import m from 'mithril'
import { c } from './component'
import { vp } from './viewport'
import { Transport } from 'tone'
import { Dial, Number } from 'nexusui'
import { Accent, Fill } from './ui'

export const Style = '#bpm.navy.bg-silver.outline'
export const ViewStyle = '#bpm'

export const Title = c(`${Style}.bg-dark-pink`, 'bpm')

export const BpmDialButton = c(`input[type=Button]${Style}`, {
  value: 'bpm',
  onclick: () => {
    var bpmdial = new Dial('#bpm', {
      size: [50, 50],
      interaction: 'vertical', // "radial", "vertical", or "horizontal"
      mode: 'relative', // "absolute" or "relative"
      min: 30,
      max: 300,
      step: 1,
      value: 80,
    })
    bpmdial.colorize('accent', Accent)
    bpmdial.colorize('fill', Fill)
    console.log(bpmdial)
    var bpm = new Number('#bpm')

    bpm.link(bpmdial)

    bpmdial.on('change', function (v) {
      console.log(v)
      Transport.bpm.value = v
    })
  },
})

export const BpmContents = [BpmDialButton.v()]

export const BpmView = () => {
  return vp(ViewStyle, BpmContents)
}
