import m from 'mithril'
import './syntax.css'

/**
State viewer
*/
export const State = {
  oncreate: ({ dom, attrs: { cell } }) => {
    cell.getStream.map(s => {
      m.render(dom, m('pre', {}, JSON.stringify(s, null, 2)))
    })
  },
  view: ({ attrs: { cell } }) =>
    m('pre', {}, JSON.stringify(cell.state, null, 2)),
}
