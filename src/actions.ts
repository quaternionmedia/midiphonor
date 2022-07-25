import { Transport } from 'tone'
import { Cell } from './types'

export const Actions = {
  clockTick: (cell: Cell, t: String) => {
    console.log('clockTick', cell, t)
    let bbs = t.split(':')
    cell.update({
      time: t,
      bars: Number(bbs[0]),
      beats: Number(bbs[1]),
      sixteenths: Number(bbs[2]),
      bpm: Transport.bpm.value,
      state: Transport.state,
    })
  },
}
