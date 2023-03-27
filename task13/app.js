const body = document.querySelector("body");
const greyCircle = document.querySelector(".grey");
const redCircle = document.querySelector(".red");
const blueCircle = document.querySelector(".blue");
const yellowCircle = document.querySelector(".yellow");

greyCircle.onclick = () => {
  body.style.backgroundColor = "grey";
};

redCircle.onclick = () => {
  body.style.backgroundColor = "red";
};
blueCircle.onclick = () => {
  body.style.backgroundColor = "blue";
};
yellowCircle.onclick = () => {
  body.style.backgroundColor = "yellow";
};
