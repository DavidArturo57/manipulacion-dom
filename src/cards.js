const IMAGE_URL = "https://placehold.co/200";
const CARD_CONTAINER = document.getElementById("container");

// Función para crear una tarjeta de usuario
const createCard = (userData) => {
    // Contenedor de la tarjeta
    const card = document.createElement("div");
    card.classList.add("card");

    // Crear imagen
    const image = document.createElement("img");
    image.src = IMAGE_URL;
    image.alt = "Placeholder user photo";
    
    // Contenedor de la imagen
    const imgContainer = document.createElement("div");
    imgContainer.id = "img-container";
    imgContainer.appendChild(image);

    // Crear el contenido de la tarjeta (nombre, descripción, edad)
    const userName = document.createElement("h3");
    userName.textContent = userData.user_name;

    const description = document.createElement("p");
    description.textContent = userData.description;

    const age = document.createElement("p");
    age.textContent = `Age: ${userData.age}`;

    // Crear la lista de bandas favoritas
    const bandsList = document.createElement("ul");
    userData.fav_music.bands.forEach((band) => {
        const listItem = document.createElement("li");
        listItem.textContent = band;
        bandsList.appendChild(listItem);
    });

    // Agregar todos los elementos a la tarjeta
    card.appendChild(imgContainer);
    card.append(userName, description, age, bandsList);

    return card;
};

// Función para mostrar todas las tarjetas de los usuarios
const renderUserCards = (users) => {
    const cardContainer = document.getElementById("container");
    cardContainer.innerHTML = "";  // Limpiar el contenedor antes de agregar nuevas tarjetas

    users.forEach((user) => {
        const userCard = createCard(user);
        cardContainer.appendChild(userCard);
    });
};



// Datos de usuarios
const users = [
    {
        id: 1,
        user_name: 'User Name',
        description: 'Lorem Ipsum.',
        age: '25',
        fav_music: {
            bands: [
                "Temerarios",
                "Los Panchos",
                "Los Acosta",
                "Los Yonics",
                "Las Jilguerillas"
            ],
        }
    },
    {
        id: 2,
        user_name: 'User1',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        age: '46',
        fav_music: {
            bands: [
                "AC/DC", 
                "Nirvana", 
                'Metalica', 
                "Guns N' Roses"
            ]
        }
    },
    {
        id: 3,
        user_name: 'User LastName',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        age: '23',
        fav_music: {
            bands: [
                "Cafe Tacuba", 
                "Matute", 
                'Jeans', 
                "Timbiriche"
            ]
        }
    }
];

// Renderizar las tarjetas de los usuarios
renderUserCards(users);

// Evento de clic para alternar la visibilidad
// Obtener el botón con el ID "btn-hide" y agregar un evento de escucha para el clic
document.getElementById("btn-hide")
.addEventListener('click', () => {
    // Cambiar la visibilidad del contenedor de la tarjeta
    CARD_CONTAINER.style.visibility = CARD_CONTAINER.style.visibility === "hidden" ? "visible" : "hidden";
});
