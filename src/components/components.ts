import m from 'mithril'
import { Stream } from '../types'

export const Observable = (s: Stream) => {
  return {
    oncreate: ({ dom }) => {
      s.map(value => {
        m.render(dom, value)
      })
    },
    onremove: ({ dom }) => m.render(dom, null),
    view: () => m('', s()),
  }
}

export const o = (o: Stream, attrs?: any) => m(Observable(o), attrs)

export const Container = {
  view: ({ attrs, children }) => m('.container', attrs, children),
}
