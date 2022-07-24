import m from 'mithril'
import { Sequencer as NexusSequencer, context } from 'nexusui'
import { Interval } from 'nexusui'
import { playNote, membraneSynth } from './note'
import { Transport } from 'tone'
import { Button } from 'construct-ui'

// TODO: move sequencer creation to state/component architecture
export var sequencer

export const Sequencer = {
  oncreate: ({ dom }) => {
    let seq = { columns: 16, rows: 4 }
    sequencer = new NexusSequencer(dom, {
      size: [window.innerWidth, window.innerWidth / 6],
      mode: 'toggle',
      rows: seq.rows,
      columns: seq.columns,
      paddingRow: 5,
      paddingColumn: 5,
    })
    //TODO: move colors to theme in state
    sequencer.colorize('fill', '#bbb')
    sequencer.colorize('accent', '#222')

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
            //TODO: move synth access to state/component architecture
            membraneSynth,
            seq.columns * (seq.rows - a.indexOf(v)) + a.indexOf(v),
            '8n'
          )
        }
      })
    })
    //TODO: move to selectable interval
    //TODO: syncronize with transport
    sequencer.interval = new Interval(Transport.bpm.value, function () {
      // console.log('tick', state.bpm(), sequencer.interval)
      sequencer.next()
    })
  },
  view: () => m(''),
}

export const SequencerStart = {
  view: () =>
    m(Button, {
      label: 'Sequencer Start',
      onclick: e => {
        context.resume()
        sequencer.interval.start()
      },
    }),
}

export const SequencerStop = {
  view: () =>
    m(Button, {
      label: 'Sequencer Stop',
      onclick: e => {
        sequencer.interval.stop()
      },
    }),
}

export const SequencerGroup = {
  view: () =>
    m(
      '',
      {
        style: {
          backgroundColor: '#222',
        },
      },
      [m(SequencerStart), m(SequencerStop), m(Sequencer)]
    ),
}
