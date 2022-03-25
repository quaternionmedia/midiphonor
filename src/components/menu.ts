import m from 'mithril'
import { Button, ButtonGroup, Icons, ListItem, SelectList } from 'construct-ui'

let selected: String[] = []

export const Menu = {
  view: vnode =>
    m(ButtonGroup, {}, [
      m(SelectList, {
        items: ['1', '2', '3'],
        label: 'select',
        trigger: m(Button, {
          iconLeft: Icons.CHEVRONS_DOWN,
          label: 'select MIDI device',
        }),
        onSelect: item => {
          let index = selected.indexOf(item)
          if (index > -1) {
            selected.splice(index, 1)
          } else {
            selected.push(item)
          }
          console.log('selected', item, index)
        },
        itemRender: item =>
          m(ListItem, {
            label: item,
            selected: selected.indexOf(item) > -1,
          }),
      }),
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
