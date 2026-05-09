document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".site-nav");
    const hamburger = document.querySelector(".hamburger");
    const overlay = document.querySelector(".overlay");
    const navLinks = document.querySelectorAll(".nav-links a");

    if (!nav || !hamburger || !overlay) {
        return;
    }

    function toggleMenu() {
        const isOpen = nav.classList.toggle("menu-active");
        hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }

    function closeMenu() {
        nav.classList.remove("menu-active");
        hamburger.setAttribute("aria-expanded", "false");
    }

    hamburger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);

    navLinks.forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 900) {
            closeMenu();
        }
    });
});
