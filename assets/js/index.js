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

// Funcion para el enlace en el menu.
function updateActiveLink() {
    var scrollPosition = window.scrollY;
    var menuLinks = document.querySelectorAll("#menuList a");
    var sections = [];
    menuLinks.forEach(function (link) {
        var sectionId = link.getAttribute("href").substring(1);
        var section = document.getElementById(sectionId);
        if (section) {
            sections.push({ link: link, section: section });
        }
    });
    var currentActiveLink = null;
    sections.forEach(function (item) {
        var sectionTop = item.section.offsetTop;
        var sectionHeight = item.section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentActiveLink = item.link;
        }
    });
    menuLinks.forEach(function (link) {
        link.classList.remove("active");
    });
    if (currentActiveLink) {
        currentActiveLink.classList.add("active");
    }
}
updateActiveLink();
window.addEventListener("scroll", updateActiveLink);



const words = ["Desarrollador de Software", "Desarrollador Web", "Ingeniero de Software", "Diseñador UX/UI"];
    let index = 0;
    let isDeleting = false;
    let typingSpeed = 500; // Velocidad de escritura en milisegundos

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
            typingSpeed = 500; // Espera antes de borrar
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

