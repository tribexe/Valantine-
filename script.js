const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * 150 + "px";
  noBtn.style.top = Math.random() * 100 + "px";
});
