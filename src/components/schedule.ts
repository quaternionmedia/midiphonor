import { vp } from './viewport'
import { c } from './component'

import { Transport, Draw } from 'tone'
import { RandomizedLooperButton } from './loop'

export const Style = '.white.bg-black'
export const ViewStyle = '.bg-dark-blue'

export const Title = c(Style, `Schedule - ${Transport}`)

export const ScheduleContents = [Title.v(), RandomizedLooperButton.v()]

export const ScheduleView = vp(ViewStyle, ScheduleContents)
