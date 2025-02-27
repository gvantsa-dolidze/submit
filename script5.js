const numberButtons = document.querySelectorAll(".btn");
const submitButton = document.querySelector(".submit-btn");
let activeNumber = null;
let clickedElement = null;

// function clearButtons() {
//   numberButtons.forEach((elem) => {
//     elem.classList.remove("active");
//   });
// }

numberButtons.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (activeNumber) {
      //  clearButtons()
      clickedElement.classList.remove("active");
    }
    activeNumber = +elem.value;
    clickedElement = elem;
    elem.classList.add("active");
  });
});

submitButton.addEventListener("click", () => {
  //   console.log(activeNumber);
  if (activeNumber) {
    localStorage.setItem("clickedNumber", activeNumber);
    window.location.href = "./tank.html";
  }
});
