const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const sound = document.getElementById("loveSound");

/* NO button runs away (mobile) */
noBtn.addEventListener("touchstart", () => {
  const x = Math.random() * 150;
  const y = Math.random() * 100;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

/* YES button action */
yesBtn.addEventListener("click", () => {

  // Play sound
  sound.play();

  // Vibrate phone
  if (navigator.vibrate) {
    navigator.vibrate(300);
  }

  // Change screen
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      background:pink;
      font-family:Arial;
      text-align:center;
    ">
      <h1>Yayyy 💖</h1>
      <p style="font-size:22px;">
        I knew you’d say YES 😍<br>
        Happy Valentine’s Day Teena auntyyyyyy💘
      </p>
    </div>
  `;

  // Hearts animation
  setInterval(createHeart, 300);
});

/* Create hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
    }
