import m from 'mithril'
import { Stream } from '../types'

export const Observable = (s: Stream) => {
  return {
    oncreate: vnode => {
      s.map(value => {
        m.render(vnode.dom, value)
      })
    },
    onremove: vnode => m.render(vnode.dom, null),
    view: () => m('', {}, s()),
  }
}
