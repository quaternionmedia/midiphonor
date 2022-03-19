import m from 'mithril'

import { Transport } from 'tone'

Transport.scheduleRepeat(time => {
  m.redraw()
}, '16n')
