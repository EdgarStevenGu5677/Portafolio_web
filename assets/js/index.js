//Inicio del menu
document.addEventListener('DOMContentLoaded', function () {
    const menuInicio = document.getElementById('menuInicio');
    if (menuInicio) {
        menuInicio.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector('#inicio');

            window.scrollTo({
                top: target.offsetTop - document.getElementById('headerContainer').offsetHeight,
                behavior: 'smooth'
            });
        });
    } else {
        console.error('El elemento con id "menuInicio" no se encontró en el DOM');
    }
});

// Funcion para mostrar y ocultar menu
function mostrarOcultarMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuPath = document.getElementById('menuPath');
    const xPath = document.getElementById('xPath');

    if (mobileNav.classList.contains('hidden')) {
        mobileNav.classList.remove('hidden');
        menuPath.classList.add('hidden');
        xPath.classList.remove('hidden');
    } else {
        mobileNav.classList.add('hidden');
        menuPath.classList.remove('hidden');
        xPath.classList.add('hidden');
    }
}

// Obtener todas las secciones
const sections = document.querySelectorAll('section');

// Función para actualizar el enlace activo
function updateActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

    sections.forEach((section, i) => {
        const link = document.querySelector(`#menuList li:nth-child(${i + 1}) a`);

        if (index === i) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
// Llamada inicial a la función para establecer el estado inicial
updateActiveLink();
// Agregar un evento de desplazamiento
window.addEventListener('scroll', updateActiveLink);

window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    var headerContainer = document.getElementById('headerContainer');
    if (window.scrollY > 0) {
        headerContainer.classList.add('shadow-lg');
        header.classList.add('bg-opacity-90');
        header.classList.remove('bg-opacity-100');
    } else {
        headerContainer.classList.remove('shadow-lg');
        header.classList.remove('bg-opacity-90');
        header.classList.add('bg-opacity-100');
    }
});

//Fin del menu

function mostrarHabilidades(id, event) {
    event.preventDefault();

    // Obtener todos los enlaces del menú
    var menuLinks = document.querySelectorAll("#menuhabilidades a");

    // Eliminar la clase "active" de todos los enlaces del menú
    menuLinks.forEach(function (link) {
        link.classList.remove("active");
    });

    // Resaltar el enlace actual
    var currentLink = event.currentTarget;
    currentLink.classList.add("active");

    // Obtener el contenedor de habilidades1
    var habilidades1Container = document.getElementById('habilidades1');

    // Obtener el contenedor de habilidades2
    var habilidades2Container = document.getElementById('habilidades2');

    // Mostrar u ocultar contenedores según el enlace clicado
    if (id === 'habilidades1') {
        habilidades1Container.style.display = 'grid';
        habilidades2Container.style.display = 'none';
    } else if (id === 'habilidades2') {
        habilidades1Container.style.display = 'none';
        habilidades2Container.style.display = 'grid';
    }
}
//Script de experiencia
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function () {
        const extraInfo = this.closest('.cards--experiencia').nextElementSibling;
        if (extraInfo.classList.contains('hidden-card')) {
            extraInfo.classList.remove('hidden-card');
            this.innerHTML = '<i class="fas fa-minus"></i>';
        } else {
            extraInfo.classList.add('hidden-card');
            this.innerHTML = '<i class="fas fa-plus"></i>';
        }
    });
});

//Idiomas index 
let currentLanguage = localStorage.getItem('language') || 'es';

let words = ["Desarrollador de Software", "Desarrollador Full-Stack"];
let index = 0;
let isDeleting = false;
let typingSpeed = 200;

const languageIcons = {
    'es': './assets/images/reino-unido.webp', // Icon for Spanish language
    'en': './assets/images/colombia.webp'     // Icon for English language
};

async function fetchTexts(language) {
    try {
        const response = await fetch(`./assets/lang/${language}.json`);
        if (!response.ok) {
            throw new Error('Error al cargar el archivo de idioma');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al cargar los textos:', error);
        return {};
    }
}

async function changeLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    localStorage.setItem('language', currentLanguage);

    const iconSrc = languageIcons[currentLanguage];
    document.getElementById('languageIcon').src = iconSrc;
    document.getElementById('languageIconMobile').src = iconSrc;

    const texts = await fetchTexts(currentLanguage);
    updateTexts(texts);
}

function updateTexts(texts) {
    updateElements('[data-section][data-value]', 'innerText', texts);
    updateElements('[data-section][data-value][placeholder]', 'placeholder', texts);

    const textarea = document.getElementById('mensaje');
    if (textarea) {
        textarea.placeholder = texts.contact?.input4 || 'Mensaje';
    }

    if (texts.home && texts.home["home_text-3"]) {
        words = texts.home["home_text-3"].split(", ");
        index = 0;
        isDeleting = false;
        document.getElementById("typingEffect").textContent = "";
    }
}

function updateElements(selector, property, texts) {
    document.querySelectorAll(selector).forEach(element => {
        const section = element.getAttribute('data-section');
        const value = element.getAttribute('data-value');
        if (texts[section] && texts[section][value]) {
            element[property] = texts[section][value];
        }
    });
}

function type() {
    const word = words[index];
    const textElement = document.getElementById("typingEffect");

    if (isDeleting) {
        textElement.textContent = word.substring(0, textElement.textContent.length - 1);
    } else {
        textElement.textContent = word.substring(0, textElement.textContent.length + 1);
    }

    if (!isDeleting && textElement.textContent === word) {
        isDeleting = true;
        typingSpeed = 300;
    } else if (isDeleting && textElement.textContent === "") {
        isDeleting = false;
        index = (index + 1) % words.length;
        typingSpeed = 200;
    }

    setTimeout(type, typingSpeed);
}

document.addEventListener('DOMContentLoaded', async () => {
    const texts = await fetchTexts(currentLanguage);
    updateTexts(texts);

    // Update the language icons on page load
    const iconSrc = languageIcons[currentLanguage];
    document.getElementById('languageIcon').src = iconSrc;
    document.getElementById('languageIconMobile').src = iconSrc;

    type();
});
