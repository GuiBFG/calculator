const numbers = document.querySelectorAll('input');
const resultScreen = document.querySelector('#result');
let account;

const button = (value) => {
  account = resultScreen.value += value;
};

const clear = () => {
  resultScreen.value = '';
};

const calc = () => {
  const result = eval(account);
  resultScreen.value = result;
};
const remove = () => {
  const completeWord = resultScreen.value;
  const lastLetter = completeWord.substring(0, resultScreen.value.length - 1);

  resultScreen.value = lastLetter;
};
