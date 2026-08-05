export const bgMusic = new Audio("./assets/sounds/bg.mp3");
export const wrongSound = new Audio("./assets/sounds/error.mp3");
export const correctSound = new Audio("./assets/sounds/success.mp3");
export const levelSound = new Audio("./assets/sounds/victory.mp3");


export let soundEnabled = true;


bgMusic.loop = true;
bgMusic.volume = 0.25;

wrongSound.volume = 0.8;
correctSound.volume = 0.8;
levelSound.volume = 0.8;



export function playBG() {

  if (!soundEnabled) return;

  if (bgMusic.paused) {

    bgMusic.play()
      .catch(() => { });

  }

}



export function stopBG() {

  bgMusic.pause();

}



function pauseBG() {

  bgMusic.pause();

}


function resumeBG() {

  if (soundEnabled) {

    bgMusic.play()
      .catch(() => { });

  }

}



function stopSound(sound) {

  sound.pause();
  sound.currentTime = 0;

}



export function playCorrect() {

  if (!soundEnabled) return;


  pauseBG();

  correctSound.currentTime = 0;

  correctSound.play()
    .catch(() => { });


  setTimeout(() => {

    stopSound(correctSound);

    resumeBG();

  }, 1500);

}



export function playWrong() {

  if (!soundEnabled) return;


  pauseBG();


  wrongSound.currentTime = 0;

  wrongSound.play()
    .catch(() => { });


  setTimeout(() => {

    stopSound(wrongSound);

    resumeBG();

  }, 1000);

}



export function playVictory() {

  if (!soundEnabled) return;


  pauseBG();


  levelSound.currentTime = 0;

  levelSound.play()
    .catch(() => { });


  setTimeout(() => {

    stopSound(levelSound);

    resumeBG();

  }, 2000);

}



export function toggleSound() {
  soundEnabled = !soundEnabled;

  console.log("soundEnabled:", soundEnabled);

  if (soundEnabled) {
    console.log("PLAY");
    bgMusic.play().catch(console.error);
  } else {
    console.log("PAUSE");
    bgMusic.pause();
    console.log("paused =", bgMusic.paused);
  }

  return soundEnabled;
}