let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        mostrarAmigos();
    }
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El amigo secreto es: ${amigoSorteado}!`;
}
