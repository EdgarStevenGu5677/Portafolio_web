//Menu movil index inicio
document.addEventListener('DOMContentLoaded', function () {
    const menuInicio = document.getElementById('menuInicio');
    if (menuInicio) {
        menuInicio.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = "../../index.html";
            setTimeout(function () {
                const target = document.querySelector('#inicio');
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - document.getElementById('headerContainer').offsetHeight,
                        behavior: 'smooth'
                    });
                }
            }, 100);
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

//Idiomas 
let currentLanguage = localStorage.getItem('language'); // Default to 'es' if no language is stored

const languageIcons = {
    'es': '../images/reino-unido.webp', // Icon for Spanish language
    'en': '../images/colombia.webp'     // Icon for English language
};

async function fetchTexts(language) {
    try {
        const response = await fetch(`../lang/${language}.json`);
        if (!response.ok) {
            throw new Error('Error al cargar el archivo de idioma');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al cargar los textos:', error);
        return {}; // Devolver un objeto vacío en caso de error para evitar problemas
    }
}

async function updateTexts(texts) {
    document.querySelectorAll('[data-section]').forEach(element => {
        const section = element.getAttribute('data-section');
        const value = element.getAttribute('data-value');
        if (texts[section] && texts[section][value]) {
            element.textContent = texts[section][value];
        }
    });
}

function changeLanguage() {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    updateLanguage(newLanguage);
}

async function updateLanguage(newLanguage) {
    currentLanguage = newLanguage;
    localStorage.setItem('language', currentLanguage);

    const texts = await fetchTexts(currentLanguage);
    await updateTexts(texts);

    const iconSrc = languageIcons[currentLanguage];
    document.getElementById('languageIcon').src = iconSrc;
    document.getElementById('languageIconMobile').src = iconSrc;
}

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', async () => {
    const texts = await fetchTexts(currentLanguage);
    await updateTexts(texts);

    // Update the language icons on page load
    const iconSrc = languageIcons[currentLanguage];
    document.getElementById('languageIcon').src = iconSrc;
    document.getElementById('languageIconMobile').src = iconSrc;
});
