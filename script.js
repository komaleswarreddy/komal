function appendToInput(value) {
  document.getElementById('input').value += value;
}

function clearInput() {
  document.getElementById('input').value = '';
}

function backspace() {
  let currentValue = document.getElementById('input').value;
  document.getElementById('input').value = currentValue.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(document.getElementById('input').value);
    if (result === undefined) {
      document.getElementById('input').value = 'Error';
    } else {
      document.getElementById('input').value = result;
    }
  } catch (error) {
    document.getElementById('input').value = 'Error';
  }
}

// Function to handle keyboard input
function handleKeyPress(event) {
    const key = event.key;
    if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      backspace();
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '(' || key === ')' || key === '.' ||
      key === '0' || key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' ||
      key === '7' || key === '8' || key === '9') {
      appendToInput(key);
    }
  }
  
  // Add event listener to the document
  document.addEventListener('keydown', handleKeyPress);
  function calculate() {
    try {
      let result = eval(document.getElementById('input').value);
      if (result === undefined) {
        document.getElementById('input').value = 'Error';
      } else {
        document.getElementById('input').value = result;
        // Clear the input after displaying the result
        setTimeout(function() {
          document.getElementById('input').value = '';
        }, 2000); // Adjust delay as needed (here, it clears after 2 seconds)
      }
    } catch (error) {
      document.getElementById('input').value = 'Error';
    }
  }
// Get the audio element
var backgroundMusic = document.getElementById('background-music');
var audioControlButton = document.getElementById('audio-control');

audioControlButton.addEventListener('click', function() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    audioControlButton.innerHTML = '&#10074;&#10074;'; // Pause icon
  } else {
    backgroundMusic.pause();
    audioControlButton.innerHTML = '&#9658;'; // Play icon
  }
});
    