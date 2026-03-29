const rsult = document.getElementById("result");

function add() {
  const num1 = first.value;
  const num2 = second.value;
  console.log(num1);
  console.log(num2);
  const result = Number(num1) + Number(num2);
  console.log(result);
  rsult.innerText = result;
}

const multi = () => {
  const n1 = Number(first.value);
  console.log(n1);
  const n2 = Number(second.value);
  console.log(n1);
  console.log(n2);
  const result = n1 * n2;
  console.log(result);
  rsult.innerText = result;
};

const divid = () => {
  const n1 = Number(first.value);
  console.log(n1);
  const n2 = Number(second.value);
  console.log(n1);
  console.log(n2);
  const result = n1 / n2;
  console.log(result);
  rsult.innerText = result;
};

const subtr = () => {
  const number1 = Number(first.value);
  console.log(number1);
  const number2 = Number(second.value);
  console.log(number2);
  const result = number1 - number2;
  console.log(result);
  rsult.innerText = result;
};
