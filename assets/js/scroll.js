document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll("[data-animate]");

    if ("IntersectionObserver" in window && animatedElements.length) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.18,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        animatedElements.forEach(function (element) {
            observer.observe(element);
        });
    } else {
        animatedElements.forEach(function (element) {
            element.classList.add("is-visible");
        });
    }

    const navLinks = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(function (link) {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });

    const form = document.querySelector("#contact-form");
    const feedback = document.querySelector("#form-feedback");
    const contactFlag = document.querySelector(".contact-flag-shell");

    if (contactFlag) {
        const scrollThreshold = Math.min(window.innerHeight * 0.45, 360);

        function updateContactFlag() {
            contactFlag.classList.toggle("is-visible", window.scrollY > scrollThreshold);
        }

        updateContactFlag();
        window.addEventListener("scroll", updateContactFlag, { passive: true });
    }

    if (form) {
        form.addEventListener("submit", function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                if (feedback) {
                    feedback.textContent = "Revise os campos obrigatorios antes de enviar.";
                }
                form.reportValidity();
            } else if (feedback) {
                feedback.textContent = "Enviando mensagem...";
            }
        });
    }
});
