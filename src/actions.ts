import { Transport } from 'tone'
import { Cell, TransportState } from './types'

export const Actions = {
  clockTick: (cell: Cell, t: String) => {
    console.log('clockTick', cell, t)
    let bbs = t.split(':')
    let states: TransportState = cell.getStream()
    states.bars(Number(bbs[0]))
    states.beats(Number(bbs[1]))
    states.sixteenths(Number(bbs[2]))
    states.bpm(Transport.bpm.value)
    states.state(Transport.state)

    cell.update({
      time: t,
    })
  },
}
