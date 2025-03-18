// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];
let sorteados = [];
console.log(sorteados)

function agregarAmigo() {
    //captura los nombres de los amigos
    let amigoDeUsuario = document.getElementById('amigo').value; 
    console.log(amigoDeUsuario);
    
    //validacion1: campo vacio
    if (amigoDeUsuario === ''){
        alert('Por favor escribe el nombre de un amigo');
        //validacion2: nombre repetido
        }else if (nombreAmigos.includes(amigoDeUsuario)){
            alert('Ya ingresaste este nombre, por favor indica otro diferente');
        }else{
            nombreAmigos.push(amigoDeUsuario);
    }
    limpiarCaja();
    amigosAgregados();
    return;
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

//Función para recorrer el array
function amigosAgregados() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

//desplazandose a través de la lista
    for (let i = 0; i < nombreAmigos.length; i++) {
        let li = document.createElement('li'); //crea elemento 'li' para cada nombre
        li.textContent = nombreAmigos[i];// asigna el nombre
        listaAmigos.appendChild(li);

    }
    return;
}

function sortearAmigo(){
    if(nombreAmigos.length === 0){
        alert('Sin más amigos para sortear, por favor ingresa los nombres de más amigos');
     } else {
        let amigoSecreto = nombreAmigos[Math.floor(Math.random()*nombreAmigos.length)];
        if(sorteados.includes(amigoSecreto)){
            sortearAmigo()
        }else{
            sorteados.push(amigoSecreto)
            //quita el nombre del amigo sorteado de la lista visible
            //indexOf busca un nombre de la lista y devuelve el indice, si no encuentra devuelve -1.
            let eliminarDeListaNombreAmigos = nombreAmigos.indexOf(amigoSecreto);

            if (eliminarDeListaNombreAmigos !== -1){//si no encuentra amigos en la lista (diferente a -1)
                nombreAmigos.splice(eliminarDeListaNombreAmigos, 1);//elimina 1 indice identificado del parametro eliminarDeListaNombreAmigos
            }
            document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: <strong>${amigoSecreto}</strong>`;
        }
    }
    //cuando se sortearon todos
    if (sorteados.length === nombreAmigos.length){
        alert('Todos los amigos han sido sorteados')
    }          
    amigosAgregados(); 
}

// Para que con la tecla Enter se guarde el nombre del amigo
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

// Vaciar completamente la lista de amigos
            nombreAmigos = []; // Se vacía el array
            document.getElementById('listaAmigos').innerHTML = ''; // Se borra la lista en pantalla
