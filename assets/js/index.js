// Funcion para el enlace en el menu.
Document.addEventListener("DOMContentLoaded", function () {
    function updateActiveLink() {
        var scrollPosition = window.scrollY;
        var menuLinks = document.querySelectorAll("#menuList a");
        var sections = [];
        
        menuLinks.forEach(function (link) {
            var sectionId = link.getAttribute("href").substring(1);
            var section = document.getElementById(sectionId);
            if (section) {
                sections.push({link: link, section: section});
            }
        });

        var currentActiveLink = null;
        
        sections.forEach(function (item) {
            var sectionTop = item.section.offsetTop;
            var sectionHeight = item.section.offsetHeight;
            
            if (scrollPosition >= sectionTop - 1 && scrollPosition < sectionTop + sectionHeight - 1) {
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
});


//Codigo para mostrar menu en dispositivos pequeños y ocultarlo
function mostrarOcultarMenu() {
    var nav = document.getElementById("nav");
    var menuList = document.getElementById("menuList");
    var menuIcon = document.getElementById("menuIcon");
    var menuPath = document.getElementById("menuPath");
    var xPath = document.getElementById("xPath");

    nav.classList.toggle("hidden");
    menuList.classList.toggle("flex-col");
    menuList.classList.toggle("space-y-4");

    // Cambiar la visibilidad de los íconos dependiendo del estado del menú
    menuPath.classList.toggle("hidden");
    xPath.classList.toggle("hidden");

    if (menuList.classList.contains("flex-col")) {
        menuList.classList.add("absolute");
        menuList.classList.remove("fixed");
        menuList.classList.add("top-full");
        menuList.classList.add("left-0");
        menuList.classList.add("w-full");
        menuList.classList.add("bg-white");
        menuList.classList.add("text-center");
    } else {
        menuList.classList.remove("absolute");
        menuList.classList.add("fixed");
        menuList.classList.remove("top-full");
        menuList.classList.remove("left-0");
        menuList.classList.remove("w-full");
        menuList.classList.remove("bg-white");
        menuList.classList.remove("text-center");
    }

    // Centrar los elementos del menú si está en modo columna
    if (menuList.classList.contains("flex-col")) {
        // Añadir clases para centrar verticalmente
        nav.classList.add("items-center");
        menuList.classList.add("items-center");
    } else {
        // Eliminar clases de centrado
        nav.classList.remove("items-center");
        menuList.classList.remove("items-center");
    }
}

//Codigo que en dispostivos pequeños me cierre el menu cuaando seleccione 1
document.addEventListener("click", function(event) {
var menuList = document.getElementById("menuList");
var mobileNav = document.getElementById("mobileNav");

// Verificar si se hizo clic en un enlace del menú
if (event.target.closest("#menuList a")) {
var linkText = event.target.textContent;
OcultarMenu();
} 
// Verificar si se hizo clic en el área fuera del menú móvil
else if (event.target.closest("#mobileNav")) {
OcultarMenu();
}
});

function OcultarMenu() {
var nav = document.getElementById("nav");
var menuList = document.getElementById("menuList");
var menuIcon = document.getElementById("menuIcon");
var menuPath = document.getElementById("menuPath");
var xPath = document.getElementById("xPath");

nav.classList.add("hidden");
menuList.classList.remove("flex-col");
menuList.classList.remove("space-y-4");

// Ocultar íconos
menuPath.classList.remove("hidden"); // Mostrar el ícono de menú
xPath.classList.add("hidden"); // Ocultar el ícono de "X"

// Restaurar estilos del menú
menuList.classList.remove("absolute");
menuList.classList.add("fixed");
menuList.classList.remove("top-full");
menuList.classList.remove("left-0");
menuList.classList.remove("w-full");
menuList.classList.remove("bg-white");
menuList.classList.remove("text-center");
}


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
    

  
