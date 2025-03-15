// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    let amigos = [];
    
    window.agregarAmigo = function () {
        const nombre = inputAmigo.value.trim();
        
        if (nombre === "") {
            alert("Por favor, ingrese un nombre válido.");
            return;
        }
        
        if (amigos.includes(nombre)) {
            alert("Este nombre ya está en la lista.");
            return;
        }
        
        amigos.push(nombre);
        actualizarLista();
        inputAmigo.value = ""; // Limpiar el campo después de añadir
    };

    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(nombre => {
            const nuevoElemento = document.createElement("li");
            nuevoElemento.textContent = nombre;
            listaAmigos.appendChild(nuevoElemento);
        });
    }
});