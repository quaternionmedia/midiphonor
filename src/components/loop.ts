import m from 'mithril'
import { Loop, Pattern } from 'tone'
import { playNote } from './note'

const notes = ['c2', 'g2', 'bb2', 'c3', 'e3', 'eb3']
const noteDurations = ['2n', '4n', '8n', '16n']
const loopFrequency = ['1n', '2n', '4n']
const loopLengths = [2, 4, 12]
const playbackRates = [0.25, 0.5, 1, 2, 4]


export function randomElement(sources){
  return sources[Math.floor(Math.random() * sources.length)]
}

export var Loops = []

export const Looper = () => {


  return {
    view: vnode =>
      m('input[type=button]', {
        value: 'loop',
        onclick: e => {

          var randomLoopFrequency = randomElement(loopFrequency);
          var randomLoopLength = randomElement(loopLengths);
          var randomPlaybackRate  = randomElement(playbackRates)
          
          const loop = new Loop((time) => {
            

            const randomNote = randomElement(notes);
            const randomDuration = randomElement(noteDurations);
            
            playNote(randomNote, randomDuration)
            console.log(`time: ${time} note: ${randomNote} duration: ${randomDuration} loop freq: ${randomLoopFrequency} loop len: ${randomLoopLength} playback rate: ${randomPlaybackRate} loop length: ${randomLoopLength*randomPlaybackRate}`);

            
          }, randomLoopFrequency).start(0).stop(randomLoopLength).set({
            playbackRate: randomPlaybackRate
          });

          Loops.push(loop);
          for( let l of Loops) {
            console.log(l.name)
          }
        
        },
      }),
  }
}
