// Obtener el elemento del título por su ID
//*const title = document.getElementById("title");
// Imprimir en la consola el elemento del título para verificar
//*console.log (title);
/*
*---document.getElementById("title"): Esta línea busca un elemento en el DOM (Document Object Model) que tenga el ID "title". Esto podría ser un <h1>, <h2>, <p>, etc.
*---const title: Almacenamos ese elemento en la variable title.
*---console.log(title): Imprimimos en la consola el elemento que hemos encontrado, para verificar que hemos accedido correctamente.
*/

/*
*----titleInput.addEventListener("input", ...): Esto agrega un "escuchador de eventos" al campo de texto. El evento "input" se dispara cada vez que el usuario introduce o cambia texto en el campo.
*-----(event) => { ... }: Esto es una función de flecha que se ejecutará cada vez que se dispare el evento. event es un objeto que contiene información sobre el evento, como el valor del input.
*/
// Obtener el campo de entrada por su ID
//*const titleInput = document.getElementById("title-input");
// Agregar un evento de escucha para detectar cambios en el campo de entrada
//*titleInput.addEventListener("input" , (event) => {
    // Imprimir el objeto del evento en la consola para depuración
    //*console.log(event);
    /*
    *---event.target: Este se refiere al elemento que disparó el evento, que en este caso es el titleInput.
    *---event.target.value: Aquí obtenemos el valor actual del campo de texto (lo que el usuario ha escrito).
    *---title.textContent = ...: Finalmente, actualizamos el contenido del elemento title con el texto ingresado por el usuario. Esto significa que cada vez que el usuario escribe algo en el campo de entrada, el texto del elemento title se actualizará para reflejarlo.
    */
    // Actualizar el contenido del elemento del título con el valor actual del campo de entrada
    //*title.textContent = event.target.value
//*});
/*title.textContent = "DOM + JS";*/

const title = document.getElementById("title");
console.log (title);

// Obtener todos los elementos con la clase "text"
const paragraphs = document.getElementsByClassName("text");
// Imprimir en la consola los elementos obtenidos
console.log (paragraphs);

const titleInput = document.getElementById("title-input");
titleInput.addEventListener("input", (event) => {
    console.log(event);
    title.textContent = event.target.value;
    //paragraphs.array.forEach((e) => (e.textContent = event.target.value));
});

// Crear un nuevo elemento de párrafo
const paragraphs1 = document.createElement("p");
// Establecer el contenido de texto del párrafo
paragraphs1.textContent ="Parrafo 1";
// Agregar el párrafo al elemento con el ID "main-content"
/*
 *---document.getElementById("main-content"): Esta parte busca un elemento en el DOM que tenga el ID "main-content". Este podría ser un <div>, <section>, etc., que actúa como contenedor.
 *---.appendChild(paragraphs1): Este método añade el nuevo párrafo (paragraphs1) como un hijo del elemento encontrado (main-content). Esto significa que el párrafo ahora se mostrará en la página, dentro del contenedor correspondiente. 
*/
document.getElementById("main-content").appendChild(paragraphs1);
