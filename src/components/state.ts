import m from 'mithril'
import './syntax.css'

/**
State viewer
*/
export const State = {
  view: ({ attrs: { cell } }) =>
    m('pre', {}, JSON.stringify(cell.state, null, 2)),
}
