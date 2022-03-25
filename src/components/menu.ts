import m from 'mithril'
import { Button, ButtonGroup, Icons, ListItem, SelectList } from 'construct-ui'

export const Menu = {
  view: vnode =>
    m(ButtonGroup, {}, [
      m(Button, {
        iconLeft: Icons.APERTURE,
        label: 'button',
      }),
      m(Button, {
        iconLeft: Icons.SETTINGS,
        label: 'settings',
      }),
    ]),
}
