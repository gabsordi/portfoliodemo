const menu = document.getElementById("menu");
const info = document.getElementById("info");

menu.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    info.textContent = e.target.dataset.info;
  }
});