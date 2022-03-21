import m from 'mithril'

import { Transport } from 'tone'
import { ComponentManager } from './component'

export const defaultViewportStyle = '.bg-dark-gray'

// export const ViewportButtonStyle = `input[type=button].gray.bg-black.w2.h1${ComponentGlobals}`

export function vp(s, c) {
  return new ViewportManager(self, s, c)
}

export class ViewportManager extends ComponentManager {
  viewportStyle: string
  componentManagers: []
  constructor(vnode, style, components) {
    super(vnode, style + defaultViewportStyle, components)
    this.viewportStyle = style + defaultViewportStyle
  }

  v(self = this) {
    return this.view(self)
  }
}
