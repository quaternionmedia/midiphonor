import m from 'mithril'
import { Button, Card } from 'construct-ui'
import { Sequencer, Interval } from 'nexusui'
import { Container } from '../../components'
import { playNote } from '../generators/note'
import { state } from '../../state'
import { globalSynth, CreateMembraneSynth } from '../generators/synth'
import { Transport } from 'tone'

export var sequencer

export function CreateSequencer(size = [500, 250], columns = 16, rows = 4) {
  return m(Card, { fluid: true }, [
    m('h4', 'Sequencer'),
    m('#sequencer', {
      oncreate: vnode => {
        sequencer = new Sequencer('#sequencer', {
          size: size,
          mode: 'toggle',
          rows: rows,
          columns: columns,
          paddingRow: 5,
          paddingColumn: 5,
        })
        sequencer.on('change', function (v) {
          console.log(v)
        })

        sequencer.on('step', function (a) {
          // returns array with 1 if row is selected in current column
          a.forEach(function (v) {
            console.log(v)
            if (v == 1) {
              //play note based on column
              playNote(
                CreateMembraneSynth(),
                columns * (rows - a.indexOf(v)) + a.indexOf(v),
                '8n'
              )
            }
          })
        })
        sequencer.interval = new Interval(Transport.bpm.value, function () {
          // console.log('tick', state.bpm(), sequencer.interval)
          sequencer.next()
        })
      },
    }),
  ])
}

export const SequencerStart = m('', {}, [
  m(Button, {
    label: 'start',
    onclick: e => {
      sequencer.interval.start()
    },
  }),
])

export const SequencerStop = m('', {}, [
  m(Button, {
    label: 'stop',
    onclick: e => {
      sequencer.interval.stop()
    },
  }),
])

export const SequencerDestroy = m('', {}, [
  m(Button, {
    label: 'destroy',
    onclick: e => {
      sequencer.destroy()
    },
  }),
])

export const SequencerGroup = m(Container, {}, [
  CreateSequencer(),
  SequencerStart,
  SequencerStop,
  SequencerDestroy,
])
