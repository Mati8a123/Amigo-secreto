// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", function () {
    let amigos = [];

    function agregarAmigo() {
        const input = document.getElementById("amigo");
        const nombre = input.value.trim();

        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        if (amigos.includes(nombre)) {
            alert("Ese nombre ya está en la lista.");
            return;
        }

        amigos.push(nombre);
        actualizarLista();
        input.value = "";
        input.focus();
    }

    function actualizarLista() {
        const listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";
        
        amigos.forEach((amigo) => {
            const li = document.createElement("li");
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (amigos.length < 2) {
            alert("Se necesitan al menos 2 participantes para hacer el sorteo.");
            return;
        }

        let indexAleatorio = Math.floor(Math.random() * amigos.length);
        let ganador = amigos[indexAleatorio];

        mostrarResultado(ganador);
    }

    function mostrarResultado(ganador) {
        const resultadoLista = document.getElementById("resultado");
        resultadoLista.innerHTML = "";  

        const li = document.createElement("li");
        li.textContent = `🎉 Tu amigo secreto es: ${ganador} 🎉`;
        li.style.color = "green";
        li.style.fontSize = "24px";
        li.style.fontWeight = "bold";
        resultadoLista.appendChild(li);
    }

    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});
