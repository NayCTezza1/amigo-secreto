//O principal objetivo deste desafio é fortalecer suas
//  habilidades em lógica de programação. Aqui você deverá desenvolver a 
// lógica para resolver o problema.

let amigos = []; 

function adicionarAmigo() {
    let campoAmigo = document.querySelector('input').value.trim();

    if(campoAmigo === "") {
        alert('Por favor, insira um nome.');
        return;
    }
        amigos.push(campoAmigo);

        console.log(amigos);
        document.querySelector('input').value = "";

        atualizaLista();
    
}

function atualizaLista() {
    let lista = document.querySelector('#listaAmigos'); 
    lista.innerHTML = "";

    amigos.forEach((nomeAmigo) => {
        let item = document.createElement('li');
        item.innerHTML = nomeAmigo;
        lista.appendChild(item);
    });
}


function sortearAmigo() {

    if(amigos.length == 0) {
        alert('Por favor, adicione pelo menos dois amigos para o sorteio.');
        return;
    }
    let sorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[sorteado];

    document.getElementById('resultado').innerHTML = `<li>O nome do amigo sorteado é: ${amigoSorteado}</li>`;
 
    
}

