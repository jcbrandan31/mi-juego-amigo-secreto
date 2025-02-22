// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let listaDeAmigos = document.getElementById('listaAmigos');
let amigoSorteado = document.getElementById('resultado');
console.log(amigos)
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo === '') {
        alert('El campo está vacío, debe escribir un nombre.');
    } else {
        amigos.push(nombreAmigo);
    }
    console.log(amigos)
    actualizarListaDeAmigos();
    limpiarCaja();
    return;    
}  

function actualizarListaDeAmigos() {
    listaDeAmigos.innerHTML = '';
    for (var i = 1; i <= amigos.length; i++) {
        let nombreAgregado = document.createElement('li');
        nombreAgregado.textContent = ` ${amigos[i - 1]}`;
        listaDeAmigos.appendChild(nombreAgregado);
    }
}

function sortearAmigo() {
    if (amigos.length >= 2) {
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado.innerHTML = `El amigo sorteado es: ${amigos[amigoAleatorio]}.`;
    } else {
        alert('Debe añadir al menos un nombre mas.');
    }
}



function limpiarCaja() {
    document.getElementById('amigo').value = '';
}