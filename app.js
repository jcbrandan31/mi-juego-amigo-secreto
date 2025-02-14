// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
console.log(amigos)
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo === '') {
        alert('El campo está vacío, debe escribir un nombre.');
    } else {
        amigos.push(nombreAmigo);
    }
    console.log(amigos)
    limpiarCaja();
    return;
    
}   

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}