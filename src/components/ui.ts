import m from 'mithril'

import { Transport } from 'tone'

export const UiGlobals = '.br4'

export const UiButtonStyle = `input[type=button].red.bg-black.w2.h1${UiGlobals}`
export const UiViewStyle = `.gray.bg-dark-gray${UiGlobals}`
export const UiStyle = `.light-green.bg-gray.aspect-ratio--object${UiGlobals}`

export const UiViewContents = [
  m(UiViewStyle, `ui - ${m}`),
  m(UiButtonStyle, 'close'),
]

export const UiView = () => {
  return {
    view: vnode => m(UiViewStyle, UiViewContents),
  }
}

export const GlobalUis = [m(UiView)] //, ...UiControls()]

export const DefaultUiView = {
  view: vnode => m(UiStyle, GlobalUis),
}
