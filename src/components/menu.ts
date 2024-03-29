import m from 'mithril'
import { Button, ButtonGroup, Icons, ListItem, SelectList } from 'construct-ui'

export const Menu = {
  view: ({ attrs: { state } }) =>
    m(ButtonGroup, {}, [
      m(MidiPortSelect, { state }),
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
  view: ({ attrs: { state } }) =>
    m(SelectList, {
      items: ['1', '2', '3'],
      label: 'select',
      trigger: m(Button, {
        iconLeft: Icons.CHEVRONS_DOWN,
        label: 'select MIDI device',
      }),
      onSelect: item => {
        let index = state().connected.indexOf(item)
        if (index > -1) {
          // Found in connected list. Disconnect
          state().connected.splice(index, 1)
        } else {
          // not found. Connect
          state().connected.push(item)
        }
        // console.log('state.connected', item, index)
      },
      itemRender: item =>
        m(ListItem, {
          label: item,
          selected: state().connected.indexOf(item) > -1,
        }),
    }),
}
