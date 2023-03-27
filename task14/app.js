const valueElem = document.getElementById("value");
const buttonElem = document.getElementById("button");
const circleElem = document.getElementById("circle");
const lengthElem = document.getElementById("length");
const areaElem = document.getElementById("area");

buttonElem.onclick = () => {
  if (valueElem.value >= 10 && valueElem.value <= 100) {
    circleElem.style.width = valueElem.value + "px";
    circleElem.style.height = valueElem.value + "px";
    circleElem.style.borderWidth = "1px";
    lengthElem.innerHTML += `${parseInt(valueElem.value * Math.PI)}`;
    areaElem.innerHTML += `${parseInt(
      (valueElem.value * valueElem.value * Math.PI) / 4
    )}`;
  } else {
    alert("Value from 10 to 100 please 🙄");
  }
};
