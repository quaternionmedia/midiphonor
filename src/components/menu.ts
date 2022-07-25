import m from 'mithril'
import { Button, ButtonGroup, Icons, ListItem, SelectList } from 'construct-ui'

export const Menu = {
  view: ({ attrs: { cell } }) =>
    m(ButtonGroup, {}, [
      m(MidiPortSelect, { cell }),
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

export const MidiPortSelect = {
  view: ({ attrs: { cell } }) =>
    m(SelectList, {
      items: ['1', '2', '3'],
      label: 'select',
      trigger: m(Button, {
        iconLeft: Icons.CHEVRONS_DOWN,
        label: 'select MIDI device',
      }),
      onSelect: item => {
        let connected = cell.getState().connected
        let index = connected.indexOf(item)
        console.log('selected', item, index)
        if (index > -1) {
          // Found in connected list. Disconnect
          connected.splice(index, 1)
          cell.update({ connected })
        } else {
          // not found. Connect
          connected.push(item)
          cell.update({ connected })
        }
        // console.log('state.connected', item, index)
      },
      itemRender: item =>
        m(ListItem, {
          label: item,
          selected: cell.state.connected.indexOf(item) > -1,
        }),
    }),
}
