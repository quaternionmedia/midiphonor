import m from 'mithril'
import { Transport } from 'tone'
import { Dial, Number } from 'nexusui'

export const BpmButtonStyle =
  'input[type=button].dark-gray.bg-light-gray.br1.tc.ba.bw1.shadow-1.ma3.ph3'

export const BpmStyle = 'light-gray.bg-dark-gray.br4.left-1'

// export const BpmInc = () =>
//   m(BpmButtonStyle, {
//     value: '+',
//     onclick: () => {
//       Transport.bpm.rampTo(Transport.bpm.value + 10, 1),
//         console.log(Transport.bpm.value)
//     },
//   })
// export const BpmDec = () =>
//   m(BpmButtonStyle, {
//     value: '-',
//     onclick: () => Transport.bpm.rampTo(Transport.bpm.value - 10, 1),
//   })

export const BpmDial = () =>
  m('input[type=button].h2.f5', {
    value: `bpm dial`,
    onclick: () => {
      var bpmdial = new Dial('#bpmdial', {
        size: [50, 50],
        interaction: 'radial', // "radial", "vertical", or "horizontal"
        mode: 'relative', // "absolute" or "relative"
        min: 30,
        max: 300,
        step: 1,
        value: 80,
      })
      bpmdial.colorize('accent', '#ff0')
      bpmdial.colorize('fill', '#333')
      console.log(bpmdial)
      var bpm = new Number('#bpmdial')

      bpm.link(bpmdial)

      bpmdial.on('change', function (v) {
        console.log(v)
        Transport.bpm.value = v
      })
    },
  })

export const BpmContents = []

export const Bpm = () => {
  return {
    view: vnode => m(BpmStyle, BpmContents),
  }
}
