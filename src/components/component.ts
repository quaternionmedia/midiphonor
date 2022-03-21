import m from 'mithril'

export const Style = '.br1.tc.pa1.ma1.outline-2'

export function c(s, c) {
  return new ComponentManager(self, s, c)
}
export class ComponentManager {
  style: string
  components: []
  constructor(vnode, s, c) {
    this.style = s + Style
    this.components = c
  }
  view(self) {
    return m(this.style, this.components)
  }

  v(self = this) {
    return this.view(self)
  }
}
