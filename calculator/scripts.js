const numbers = [...document.querySelectorAll(".number")];
const utilities = [...document.querySelectorAll(".utility")];
const visor = document.querySelector("#visor");

function printVisor() {
  visor.value += this.value;
}

function calcUtility() {
  let temp = this;
  switch (this.innerText) {
    case "C":
      clear();
      break;
    case "":
      back();
      break;
    case "/":
      div(temp);
      break;
    case "X":
      mult(temp);
      break;
    case "+":
      sum(temp);
      break;
    case "-":
      minus(temp);
      break;
    case "=":
      equal();
      break;
  }
}

numbers.forEach(number => number.addEventListener("click", printVisor));
utilities.forEach(utility => utility.addEventListener("click", calcUtility));

function clear() {
  visor.value = "";
}

function back() {
  let temp = [...visor.value];
  temp.pop();
  temp = temp.join("");
  visor.value = temp;
}

function div(temp) {
  visor.value += temp.innerText;
}

function mult(temp) {
  visor.value += temp.innerText.toLowerCase();
}

function sum(temp) {
  visor.value += temp.innerText;
}

function minus(temp) {
  visor.value += temp.innerText;
}

function equal() {
  if (visor.value.match(/x/g)) visor.value = visor.value.replace(/x/g, "*");
  visor.value = eval(visor.value);
}
