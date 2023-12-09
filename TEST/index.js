const appDiv = document.querySelector('.app-container');
const text = document.querySelector('.app-text');
let originalText = text.textContent;

let singleTapActivated = false;
let doubleTapActivated = false;

appDiv.addEventListener('click', (event) => {
  if (event.touches && event.touches.length === 2) {
    if (!doubleTapActivated) {
      doubleTapActivated = true;

      setTimeout(() => {
        if (doubleTapActivated) {
          // Change the text content for two-finger tap
          text.textContent = 'You performed a two-finger tap on the app.';
        }
        doubleTapActivated = false;
      }, 300); // Reset doubleTapActivated after 300 milliseconds
    }
  } else {
    if (!singleTapActivated) {
      singleTapActivated = true;

      setTimeout(() => {
        if (singleTapActivated) {
          // Change the text content for single tap
          text.textContent =
            'You performed a single tap on the app with 1 finger.';
        }
        singleTapActivated = false;
      }, 300); // Reset singleTapActivated after 300 milliseconds
    } else {
      // Change the text content for double tap
      text.textContent = 'You performed a double tap.';
      singleTapActivated = false;
    }
  }
});

appDiv.addEventListener('touchstart', (event) => {
  if (event.touches.length === 3) {
    // Change the text content for three-finger swipe up
    text.textContent = 'You swiped up with 3 fingers.';
  }
});

const deactivateButton = document.getElementById('deactivateApp');
deactivateButton.addEventListener('click', () => {
  text.textContent = originalText;
});
