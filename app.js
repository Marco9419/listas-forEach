var animales = ["Perro", "Gato", "Murcielago", "Jirafa", "Elefante", "Mono", "Leon", "Tigre", "Cebra", "Borrego"];
var nombres = ["Clara", "Luis", "Felipe", "Manuel", "Marco", "Carlos", "Alberto", "Rodrigo", "Ana", "Eduardo"];
var computadoras = ["Dell", "Acer", "Mac", "HP", "Lenovo", "Asus", "Apple", "Toshiba", "Samsung", "Sony"]

const btnAnimal = document.querySelector('.btn-animales')
const btnNombre = document.querySelector('.btn-nombres')
const btnCompu = document.querySelector('.btn-computadoras')
const listas = document.querySelector('.listas');

function displayist(listSize){
    // limpiamos la lista
    listas.textContent = "";

    // listSize es el tamaño que le daremos al mandar a llamar la funcion displayList
    listSize.forEach( arrays => {

        const li = document.createElement('li')
        li.textContent = arrays
        listas.appendChild(li)
    })
}


// cremos los eventos al momento de apretal un boton
// boton animales
btnAnimal.addEventListener('click', () => {
    displayist(animales)
})

// boton nombres
btnNombre.addEventListener('click', () => {
    displayist(nombres)
})

// boton computadoras
btnCompu.addEventListener('click', () => {
    displayist(computadoras)
})




