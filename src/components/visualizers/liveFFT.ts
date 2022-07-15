//https://tonejs.github.io/examples/mic
// const mic = new Tone.UserMedia();

// const micFFT = new Tone.FFT();
// mic.connect(micFFT);

// fft({
//     tone: micFFT,
//     parent: document.querySelector("#content")
// });

// // bind the interface
// const micButton = document.querySelector("tone-mic-button");
// micButton.supported = Tone.UserMedia.supported;
// micButton.addEventListener("open", () => mic.open());
// micButton.addEventListener("close", () => mic.close());

// import UserMedia from 'tone'

// let mic = new UserMedia()

// export function CreateLiveFFTView() {
//   return m('', {}, [
//     m('h4', 'LiveFFT'),
//     m('#liveFFT', {
//       oncreate: vnode => {
//         let liveFFT = new LiveFFT('#liveFFT', {
//           size: [100, 100],
//         })
//         liveFFT.connect(Destination)
//       },
//     }),
//   ])
// }

// export const liveFFTGroup = m(Container, {}, CreateLiveFFTView())
