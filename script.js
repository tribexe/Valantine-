const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

/* NO button runs away */
noBtn.addEventListener("touchstart", () => {
  const x = Math.random() * 150;
  const y = Math.random() * 100;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

/* YES button action */
yesBtn.addEventListener("click", () => {
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
        I knew you would say YES 😍<br>
        Happy Valentine’s Day 💘
      </p>
    </div>
  `;
});
