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

//Fin del menu

const words = ["Desarrollador de Software", "Desarrollador Full-Stack", "Ingeniero de Software"];
    let index = 0;
    let isDeleting = false;
    let typingSpeed = 200; // Velocidad de escritura en milisegundos

    function type() {
        const word = words[index];
        const text = document.getElementById("typingEffect");
        if (isDeleting) {
            text.textContent = word.substring(0, text.textContent.length - 1);
        } else {
            text.textContent = word.substring(0, text.textContent.length + 1);
        }

        if (!isDeleting && text.textContent === word) {
            isDeleting = true;
            typingSpeed = 200; // Espera antes de borrar
        } else if (isDeleting && text.textContent === "") {
            isDeleting = false;
            index = (index + 1) % words.length;
            typingSpeed = 200; // Velocidad de escritura
        }

        setTimeout(type, typingSpeed);
    }

    // Iniciar el efecto de escritura
    document.addEventListener("DOMContentLoaded", function () {
        type();
    });

    function mostrarHabilidades(id, event) {
        event.preventDefault();

        // Obtener todos los enlaces del menú
        var menuLinks = document.querySelectorAll("#menuhabilidades a");

        // Eliminar la clase "active" de todos los enlaces del menú
        menuLinks.forEach(function(link) {
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
        button.addEventListener('click', function() {
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

