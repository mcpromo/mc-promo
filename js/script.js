document.addEventListener("DOMContentLoaded", () => {

    console.log("Site loaded");

    // безопасные кнопки
    const buttons = document.querySelectorAll(".btn-primary, .btn-secondary, .service-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.style.transform = "scale(0.97)";
            setTimeout(() => btn.style.transform = "scale(1)", 150);
        });
    });

});
