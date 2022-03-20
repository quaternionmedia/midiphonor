import m from 'mithril'

import { Transport, Draw } from 'tone'
import { LoopOn, LoopOff, RandomizedLooperButton } from './loop'
import { ViewportGlobals } from './viewport'
import { ComponentGlobals } from './component'

export const ScheduleViewStyle = `.yellow.bg-dark-blue${ViewportGlobals}`

Transport.debug = true

Transport.scheduleRepeat(time => {
  Draw.schedule(() => {
    console.log(time)
  }, time)
}, '16n')

// Transport.start()

export const ScheduleViewContents = [
  m(ScheduleViewStyle, `schedule view - ${Transport}`),
  m(ScheduleViewStyle, m(RandomizedLooperButton)),
  //   m('white.bg-black', m(LoopOn)),
  //   m('white.bg-black', m(LoopOff)),
]

export const GlobalSchedules = [
  m(ScheduleViewStyle, ScheduleViewContents),
  m(ScheduleViewStyle, ScheduleViewContents),
]

export const DefaultScheduleView = {
  view: vnode => m(ViewportGlobals, GlobalSchedules),
}
