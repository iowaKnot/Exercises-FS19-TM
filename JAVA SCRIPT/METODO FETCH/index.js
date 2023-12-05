async function fetchData() {
    try {
        const response = await fetch('https://ringsdb.com/api/public/card/01001.json?_format=json');
        const data = await response.json();
        
        const cardName = data.name;
        const cardImage = 'https://ringsdb.com' + data.imagesrc;

        const $p = document.querySelector('.my-name');
        const $img = document.querySelector('.my-image');

        $p.innerText = cardName;
        $img.setAttribute('src', cardImage);

    } catch (error) {
        console.log(error);
    }
}

fetchData();