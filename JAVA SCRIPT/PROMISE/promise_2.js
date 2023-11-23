// Crea una catena di Promises per simulare un'operazione asincrona in più fasi. -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.

function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const userData = { id: 1, name: 'John' };
            resolve(userData);
        }, 1000);
    });
}

function fetchUserPosts(userId, userName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const userPosts = ['Post 1', 'Post 2', 'Post 3'];
            resolve(userPosts);
        }, 1500);
    });
}

fetchUserData().then((userData) => {
    console.log(`Username: ${userData.name}`);
    return fetchUserPosts(userData.id, userData.name);
}).then((userPosts) => {
    console.log(`Posts: ${userPosts}`);
}).catch((error) => {
    console.log(`Error during the call of the API: ${error}`);
});