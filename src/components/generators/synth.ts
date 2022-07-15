import m from 'mithril'
import { Piano } from 'nexusui'
import { Container } from '../../components'
import { playNote, CreateNoteJoystick } from './note'
import { AMSynth, DuoSynth, FMSynth, MembraneSynth, PolySynth, now } from 'tone'

export var synths = []
export var globalSynth = CreatePolySynth()

export function CreateAMSynth() {
  let AMsynth = new AMSynth().toDestination()
  synths.push(AMsynth)
  return AMsynth
}

export function CreateDuoSynth() {
  let duoSynth = new DuoSynth().toDestination()
  synths.push(duoSynth)
  return duoSynth
}

export function CreateFMSynth() {
  let FMsynth = new FMSynth().toDestination()
  synths.push(FMsynth)
  return FMsynth
}

export function CreateMembraneSynth() {
  let membraneSynth = new MembraneSynth().toDestination()
  synths.push(membraneSynth)
  return membraneSynth
}

export function CreatePolySynth() {
  let polySynth = new PolySynth().toDestination()
  synths.push(polySynth)
  return polySynth
}

export function CreateSynthView(size = [500, 100]) {
  return m('', {}, [
    m('h4', 'Synth'),
    m('#synth', {
      oncreate: vnode => {
        let synth = new Piano('#synth', {
          size: size,
          mode: 'button', // 'button', 'toggle', or 'impulse'
          lowNote: 33,
          highNote: 87,
        })

        synth.on('change', function (v) {
          console.log(v)
          if (v.state) {
            playNote(CreatePolySynth(), v.note, '8n')
          }
        })
      },
    }),
  ])
}

export const SynthGroup = m(Container, {}, [
  CreateSynthView(),
  CreateNoteJoystick(),
])
