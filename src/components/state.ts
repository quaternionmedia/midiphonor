import m from 'mithril'
import './syntax.css'

/**
State viewer
*/
export const State = {
  oncreate: ({ dom, attrs: { state } }) => {
    state.map(s => {
      // console.log('new state', s)
      m.render(dom, m('pre', {}, JSON.stringify(state, null, 2)))
    })
  },
  view: ({ attrs: { state } }) => m('pre', {}, JSON.stringify(state, null, 2)),
}
