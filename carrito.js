const carritoElementos = document.getElementById('carrito-elementos')
const carritoSubtotal = document.getElementById('carrito-subtotal')
const carritoEnvio = document.getElementById('carrito-envio')
const carritoTotal = document.getElementById('carrito-total')

const carritoEnvioGratis = document.getElementById('carrito-envioGratis')

const sumarPokemon = document.getElementById('carrito-botones-sumar-pokemon');
const restarPokemon = document.getElementById('carrito-botones-restar-pokemon');
const inputPokemon = document.getElementById('carrito-input-pokemon');
const precioPokemon = document.getElementById('carrito-precio-pokemon');

const sumarStarWars = document.getElementById('carrito-botones-sumar-starwars');
const restarStarWars = document.getElementById('carrito-botones-restar-starwars');
const inputStarWars = document.getElementById('carrito-input-starwars');
const precioStarWars = document.getElementById('carrito-precio-starwars');

let precioItemPokemon = parseFloat(1799.99).toFixed(2);
let precioItemStarWars = parseFloat(1799.99).toFixed(2);


function sumarItem(input, precio, precioItem) {
    input.value = Number(input.value) + 1
    precio.innerHTML = (parseFloat(precio.innerHTML) + parseFloat(precioItem)).toFixed(2)
    carritoElementos.innerHTML = Number(carritoElementos.innerHTML) + 1
    carritoSubtotal.innerHTML = (parseFloat(carritoSubtotal.innerHTML) + parseFloat(precioItem)).toFixed(2)
    carritoTotal.innerHTML = (parseFloat(carritoTotal.innerHTML) + parseFloat(precioItem)).toFixed(2)
    if (Number(carritoSubtotal.innerHTML) < 8000) {
        carritoEnvio.innerHTML = 2500;
        carritoEnvioGratis.innerHTML = "ENVÍO"
    } else {
        carritoEnvio.innerHTML = 0;
        carritoEnvioGratis.innerHTML = "¡ENVÍO GRATIS!"
    }
}

function restarItem(input, precio, precioItem) {
    if (Number(input.value) > 0) {
        input.value = Number(input.value) - 1
        precio.innerHTML = (parseFloat(precio.innerHTML) - parseFloat(precioItem)).toFixed(2)
        carritoElementos.innerHTML = Number(carritoElementos.innerHTML) - 1
        carritoSubtotal.innerHTML = (parseFloat(carritoSubtotal.innerHTML) - parseFloat(precioItem)).toFixed(2)
        carritoTotal.innerHTML = (parseFloat(carritoTotal.innerHTML) - parseFloat(precioItem)).toFixed(2)
        if (Number(carritoSubtotal.innerHTML) < 8000) {
        carritoEnvio.innerHTML = 2500;
        carritoEnvioGratis.innerHTML = "ENVÍO"
        } else {
        carritoEnvio.innerHTML = 0;
        carritoEnvioGratis.innerHTML = "¡ENVÍO GRATIS!"
    }
}
}

sumarPokemon.addEventListener('click', () => sumarItem(inputPokemon, precioPokemon, precioItemPokemon));
restarPokemon.addEventListener('click', () => restarItem(inputPokemon, precioPokemon, precioItemPokemon));

sumarStarWars.addEventListener('click', () => sumarItem(inputStarWars, precioStarWars, precioItemStarWars));
restarStarWars.addEventListener('click', () => restarItem(inputStarWars, precioStarWars, precioItemStarWars));