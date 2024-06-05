document.addEventListener('DOMContentLoaded', function () {
    const shopBtn = document.getElementById('shopBtn');
    const modal = document.getElementById('myModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const subscribeForm = document.getElementById('subscribeForm')



//* User*//
loginBtn.addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'coderhouse' && password === '1234') {
        alert('Inicio de sesión exitoso.');
        loginPopup.style.display = 'none';
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
});

closeLoginPopup.addEventListener('click', function () {
    loginPopup.style.display = 'none';
});

let loggedIn = false;
let cartItems = [];

console.log(`Nombre del usuario: ${userInfo.name}`);
userInfo.age++;

document.querySelector('.fa-user').addEventListener('click', function() {
    if (loggedIn) {
        alert(`Hola, ${userInfo.name}!`);
    } else {
        alert('Inicia sesión para acceder a tu cuenta.');
    }
});
 //*Cart*//

function addToCart(item) {
    cartItems.push(item);
    alert(`${item} agregado al carrito.`);
}

for (let i = 1; i <= 5; i++) {
    console.log(`Número ${i}`);
}

function handleNavClick(event) {
    event.preventDefault();
    let sectionId = event.target.getAttribute('href').substring(1);
    console.log(`Clic en enlace: ${sectionId}`);
}

document.querySelectorAll('.navbar a').forEach(item => {
    item.addEventListener('click', handleNavClick);
});

document.querySelector('input[type="text"]').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        let searchQuery = event.target.value.trim();
        if (searchQuery !== 'Top') {
            alert(`Buscando: ${searchQuery}`);
        } else {
            alert('Por favor, ingresa algo para buscar.');
        }
    }
});
});

