import m from 'mithril'
import { Stream } from '../types'

/**
  Create an Observable POJO component from a Stream()

  @param {Stream} s the stream to map
  @returns {Object} a POJO component with a {view}

  This component accepts a Stream(), and returns a component with a view of: `<div>value</div>`
  It is not rendered to a mithril object. To render to a mithril, use:
    `m(Observable(stream))`
  or the shortcut wrapper:
    `o(stream)`
*/
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

/**
  Observable mithril component

  @param stream: Stream The stream() to observe. See Observable() for detailed usage.
  @param attrs: attrs The mithril attributes to pass to the component.
  @returns {m} a mithril object

  This is a mithril component wrapper around the Observable POJO components
  Use this to view the value of a Stream() which update as the stream updates
*/
export const o = (o: Stream, attrs?: any) => m(Observable(o), attrs)

/**
  Creates a Container Object wrapper to contain child elements

  @param attrs: Object the mithril parameters to pass to this container
  @param children the children to pass in to the container
  @returns {Object} a POJO component with a view
*/
export const Container = {
  view: ({ attrs, children }) => m('.container', attrs, children),
}
