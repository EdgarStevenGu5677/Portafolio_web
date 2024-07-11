//Inicio del menu
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menuInicio').addEventListener('click', function(e) {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace
  
        // Selecciona el elemento al que quieres hacer scroll
        const target = document.querySelector('#inicio');
  
        // Realiza el scroll suave con el margen superior
        window.scrollTo({
            top: target.offsetTop - 80, // 80px en lugar de 5rem para ajustarse a la mayoría de los dispositivos móviles
            behavior: 'smooth'
        });
    });
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

while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

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