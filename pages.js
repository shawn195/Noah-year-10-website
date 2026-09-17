const pages = [
  "http://eelslap.com",
  "https://memory.toys",
  "https://amazon.com",
  "https://amazon.com.au",
  "https://musical.toys",
  "https://pointerpointer.com",
  "https://cat-bounce.com",
];

const randomButton = document.getElementById('random-page-btn');

randomButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * pages.length);
  
  window.location.href = pages[randomIndex];
});