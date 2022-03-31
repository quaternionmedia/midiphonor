import { Transport } from 'tone'
import { Stream } from './types'
import { stream } from 'flyd'

export const Actions = (update: Stream, state: Stream) => ({
  clockTick: (t: String) => {
    let bbs = t.split(':')
    update({
      time: t,
    })
    state().bars(Number(bbs[0]))
    state().beats(Number(bbs[1]))
    state().sixteenths(Number(bbs[2]))
    state().bpm(Transport.bpm.value)
    state().state(Transport.state)
  },
})
