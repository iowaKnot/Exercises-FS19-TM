const $inputUserText = document.querySelector("#userText");
const $ul = document.querySelector('ul');

const state = {
  userText: "",
}

$inputUserText.addEventListener("input", (event) => {
  state.userText = event.target.value;
});

const addProduct = () => {
  const $li = document.createElement('li');
  $li.innerHTML = `
  <input type="checkbox" />
  <label>${state.userText}</label>
  `;
  $ul.appendChild($li);
  $inputUserText = "";
};