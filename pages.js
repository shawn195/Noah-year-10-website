const pages = [
  "http://eelslap.com",
  "https://memory.toys",
  "https://www.amazon.com.au/How-Talk-Your-About-Safety/dp/045149492X",
  "https://www.amazon.com/dp/1613749414?lv=shuf&tag=judgeabook-20&channelId=1&plpRedirect=mhFallback",
  "https://www.amazon.com/dp/0595002366?lv=shuf&tag=judgeabook-20&channelId=1&plpRedirect=mhFallback",
  "https://musical.toys",
  "https://pointerpointer.com",
  "https://cat-bounce.com",
];

const randomButton = document.getElementById('random-page-btn');

randomButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * pages.length);
  
  window.location.href = pages[randomIndex];
});