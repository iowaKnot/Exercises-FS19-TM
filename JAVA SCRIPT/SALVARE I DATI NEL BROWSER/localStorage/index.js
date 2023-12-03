const btn = document.querySelector('.btn');

function name (firstname) {
    const mySpan = document.querySelector('.title-name');

    mySpan.innerText = firstname;

    localStorage.setItem('title-name', firstname);
};

btn.addEventListener('click', () => {
    const userEmail = document.querySelector('.email');
    const userEmailValue = userEmail.value;
    localStorage.setItem('email', userEmailValue);

    const firstNameInput = document.querySelector('.firstname');
    const firstNameInputValue = firstNameInput.value;

    const userLastName = document.querySelector('.lastname');
    const userLastNameValue = userLastName.value;
    localStorage.setItem('lastname', userLastNameValue);

    name(firstNameInputValue);
});

const savedUsername = localStorage.getItem('title-name');

if (savedUsername) {
    name(savedUsername);
};