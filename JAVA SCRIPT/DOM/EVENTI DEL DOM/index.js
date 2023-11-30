const $body = document.querySelector('body');
const $button = document.querySelector('.btn');

$button.addEventListener("click", (event) => {
    $body.classList.toggle("theme");
});