const share = document.getElementById("thatsharebutton");
const activeState = document.querySelector(".user");
const gogoshare = document.getElementById("thatwhatshows");
share.addEventListener("click", () => {
  activeState.classList.toggle("hidden");
  gogoshare.classList.toggle("gogosend");
});
// ==================================
const unshare = document.getElementById("thatsharebutton2");
const unactiveState = document.querySelector(".user");
const ungogoshare = document.getElementById("thatwhatshows");
unshare.addEventListener("click", () => {
  unactiveState.classList.toggle("hidden");
  ungogoshare.classList.toggle("gogosend");
});
