const btn = document.querySelector('.btn');

function name (firstname) {
    const mySpan = document.querySelector('.title-name');

    mySpan.innerText = firstname;

};

btn.addEventListener('click', () => {
    const userEmail = document.querySelector('.email');
    const userEmailValue = userEmail.value;
    sessionStorage.setItem('email', userEmailValue);
    
    const firstNameInput = document.querySelector('.firstname');
    const firstNameInputValue = firstNameInput.value;
    sessionStorage.setItem('title-name', firstNameInputValue);

    const userLastName = document.querySelector('.lastname');
    const userLastNameValue = userLastName.value;
    sessionStorage.setItem('lastname', userLastNameValue);

    name(firstNameInputValue);
});