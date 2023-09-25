const textElement = document.getElementById("typing-text");
const text = textElement.innerText;
const textLength = text.length;
let currentIndex = 0;
let reverseAnimation = false;

function typeText() {
  if (!reverseAnimation) {
    textElement.innerText = text.substring(0, currentIndex);
    currentIndex++;

    if (currentIndex <= textLength) {
      setTimeout(typeText, 100); // Adjust typing speed as needed
    } else {
      setTimeout(reverseText, 1000); // Wait for 1 second before reversing
    }
  } else {
    textElement.innerText = text.substring(0, currentIndex);
    currentIndex--;

    if (currentIndex >= 0) {
      setTimeout(reverseText, 100); // Adjust erasing speed as needed
    } else {
      currentIndex = 0;
      reverseAnimation = false;
      setTimeout(typeText, 1000); // Wait for 1 second before typing again
    }
  }
}

function reverseText() {
  reverseAnimation = true;
  typeText();
}

typeText(); 
// Get all project overlay elements
const overlayElements = document.querySelectorAll(".overlay");

// Add mouseover and mouseout event listeners to each overlay
overlayElements.forEach((element, index) => {
  element.addEventListener("mouseover", () => {
    element.textContent = `</ Project ${index + 1}/>`;
  });
  element.addEventListener("mouseout", () => {
    element.textContent = `Project ${index + 1}`;
  });
});
