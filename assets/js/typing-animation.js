const textElement = document.querySelector('.anim');
const originalText = textElement.textContent;
textElement.textContent = '';

let index = 0;

function typeText() {
  if (index < originalText.length) {
    textElement.textContent += originalText[index];
    index++;
    setTimeout(typeText, 100); // Adjust the typing speed by changing the delay (e.g., 100ms)
  } else {
    // Pause for 5 seconds before erasing
    setTimeout(eraseText, 500);
  }
}

function eraseText() {
  const currentText = textElement.textContent;
  if (currentText.length > 0) {
    const newText = currentText.substring(0, currentText.length - 1);
    textElement.textContent = newText;
    setTimeout(eraseText, 50); // Adjust the erasing speed by changing the delay (e.g., 50ms)
  } else {
    // Pause for 2 seconds before typing again
    setTimeout(typeText, 2000); // Add a 2-second pause before typing again
    index = 0; // Reset the index for looping
  }
}

// Start the typing animation
typeText();
