document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // PRELOADER
    // =========================

    const preloader = document.getElementById("preloader");

    if (preloader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                preloader.style.opacity = "0";
                preloader.style.visibility = "hidden";
            }, 600);
        });
    }

    // =========================
    // SCROLL ANIMATION
    // =========================

    const animatedElements = document.querySelectorAll(".fade-up, .fade");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    animatedElements.forEach(el => observer.observe(el));

    // =========================
    // SMOOTH HEADER EFFECT
    // =========================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
        } else {
            header.style.boxShadow = "none";
        }

    });

});

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MOBILE MENU (simple)
    // =========================

    const nav = document.querySelector("nav");

    const toggleBtn = document.createElement("div");

    toggleBtn.innerHTML = "☰";

    toggleBtn.style.fontSize = "28px";

    toggleBtn.style.cursor = "pointer";

    toggleBtn.style.display = "none";

    document.querySelector(".nav").appendChild(toggleBtn);

    const media = window.matchMedia("(max-width: 900px)");

    function handleResize() {

        if (media.matches) {
            toggleBtn.style.display = "block";
            nav.style.display = "none";
        } else {
            toggleBtn.style.display = "none";
            nav.style.display = "flex";
        }

    }

    handleResize();

    media.addEventListener("change", handleResize);

    toggleBtn.addEventListener("click", () => {

        if (nav.style.display === "none") {
            nav.style.display = "flex";
            nav.style.flexDirection = "column";
            nav.style.background = "white";
            nav.style.position = "absolute";
            nav.style.top = "80px";
            nav.style.right = "20px";
            nav.style.padding = "20px";
            nav.style.borderRadius = "20px";
            nav.style.boxShadow = "0 20px 50px rgba(0,0,0,.15)";
        } else {
            nav.style.display = "none";
        }

    });

});

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // BUTTON CLICK EFFECT
    // =========================

    const buttons = document.querySelectorAll(".btn-primary, .btn-secondary, .service-btn");

    buttons.forEach(btn => {

        btn.addEventListener("click", () => {

            btn.style.transform = "scale(0.96)";

            setTimeout(() => {
                btn.style.transform = "scale(1)";
            }, 150);

        });

    });

    // =========================
    // PARALLAX FLOAT CARDS
    // =========================

    const cards = document.querySelectorAll(".floating-card");

    window.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - 0.5) * 10;

        const y = (e.clientY / window.innerHeight - 0.5) * 10;

        cards.forEach(card => {
            card.style.transform = `translate(${x}px, ${y}px)`;
        });

    });

});

