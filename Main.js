// Declaracion de variables globales
let idx = 0;

// Obtencion de elementos html
let contcarusel = document.getElementById("carouselImg");
let caruselimg = document.querySelectorAll("#carouselImg .contvideo");
let boxes = document.querySelectorAll(".box");
let navbar = document.querySelector("nav");

// Funcion para cambiar imagenes
let intervalo = setInterval(() => {
    idx++;
    if (idx > caruselimg.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = caruselimg.length - 1;
    }

    contcarusel.style.transform = `translateX(${-idx * 100}vw)`;
}, 7000);

// Funcion que anima y controlas las cajas en la ventana
window.addEventListener("scroll", () => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const seccion = document.querySelector("#carouselsec");

    const configuracion = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px",
    };

    const Observador = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navbar.classList.remove("scrolled");
            } else {
                navbar.classList.add("scrolled");
            }
        });
    }, configuracion);

    Observador.observe(seccion);
});
