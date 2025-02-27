const clickedNumber = localStorage.getItem("clickedNumber");
const infoParagraph = document.querySelector(".info");
infoParagraph.innerHTML = `You selected ${clickedNumber} out of 5`;
