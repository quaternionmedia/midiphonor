import m from 'mithril'
import { Transport } from 'tone'
import { TextButton, Number } from 'nexusui'

export const TimeStyle = '.pa4'
export const CurrentTime = () => m('', {}, Transport.seconds)

export const TimeButton = () =>
  m(TimeStyle, {
    oncreate: () => {
      var timeButton = new TextButton('#timeButton', {
        size: [40, 40],
        mode: 'aftertouch',
        state: false,
      })
      timeButton.colorize('accent', '#ff0')
      timeButton.colorize('fill', '#333')
      console.log(timeButton)
      var timeNumber = new Number('#timeButton')
      //   console.log(timeNumber)
      //   time.link(timeButton)
      timeNumber.link(timeButton)
      //   console.log('yep')

      //   time.on('change', function (v) {
      //     console.log(v)
      //     time = Transport.seconds
      //   })
    },
  })
