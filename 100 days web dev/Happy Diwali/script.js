const box = document.getElementById("giftBox");
const rocket = document.getElementById("rocket");
const text = document.getElementById("diwaliText");
const fireworks = document.getElementById("fireworks");
const confetti = document.getElementById("confetti");

box.addEventListener("click", () => {
  box.classList.add("open");

  setTimeout(() => {
    rocket.style.display = "block";
    rocket.classList.add("launch");
  }, 800);
});

rocket.addEventListener("animationend", () => {
  text.style.display = "block";
  text.classList.add("show");

  fireworks.style.display = "block";
  for (let i = 0; i < 20; i++) {
    const span = document.createElement("span");
    span.style.setProperty('--x', (Math.random() * 200 - 100));
    span.style.setProperty('--y', (Math.random() * 200 - 100));
    fireworks.appendChild(span);
    setTimeout(() => { span.remove(); }, 1000);
  }

  confetti.style.display = "block";
  for (let i = 0; i < 30; i++) {
    const span = document.createElement("span");
    span.style.setProperty('--x', (Math.random() * 200 - 100) + 'px');
    span.style.setProperty('--y', (Math.random() * 200 + 100) + 'px');
    span.style.setProperty('--hue', Math.floor(Math.random() * 360));
    confetti.appendChild(span);
    setTimeout(() => { span.remove(); }, 2000);
  }
});
